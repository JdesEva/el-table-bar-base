<template>
  <div v-if="!native" ref="dRef" class="elTableBar" @mouseenter="__computedView" @mousewheel="fn">
    <el-scrollbar ref="barRef" :noresize="fixed" wrap-class="scrollbar-wrapper">
      <div
        :style="
          `width:${
            !isScrollBar
              ? '100%'
              : !isRep
              ? this.firefox
                ? '-moz-fit-content'
                : 'fit-content'
              : contentWidth + 'px'
          }; height:${
            fixed ? 'auto' : typeof height === 'number' ? `${height}px` : height
          }`
        "
      >
        <slot />
      </div>
    </el-scrollbar>
  </div>
  <div v-else class="elTableBar-native">
    <slot />
  </div>
</template>

<script>
/**
 * element-ui 自定义表格组件
 * 主要特点 将element-ui的表格横向原生滚动条改动为el-scrollbar
 *
 */
export default {
  name: 'elTableBar',
  components: {},
  filters: {},
  props: {
    fixed: {
      // 滚动条适应屏幕滚动，开启此项,则长表格（超出一屏幕）滚动条会默认出现在窗口底部，当表格底部出现在窗口视野，滚动条会复位到表格底部
      type: Boolean,
      default: false
    },
    bottom: {
      // 开启滚动条自适应之后,自适应滚动条距离窗口底部的距离,默认15
      type: Number,
      default: 15
    },
    delay: {
      // 滚轮响应延迟,默认300毫秒，建议不做改动，最小值200,最大值1000
      type: Number,
      default: 300
    },
    static: {
      // 静态表格请开启此项.此props表示是否初始化时计算滚动条，异步获取的表格数据的表格建议保持默认，以节约性能。当表格初始化滚动条错误时，可以考虑打开此项以尝试自我修复
      type: Boolean,
      default: false
    },
    native: {
      // 如果表格列设置 fixed 属性，请开启此项还原滚动条。注意在此项情况下，其他任何设置均不生效
      type: Boolean,
      default: false
    },
    height: {
      // 设置页面高度以保证启用纵向滚动条，当开启fixed模式，该属性会被丢弃
      type: [Number, String],
      default: () => 'auto',
      validator: v => {
        let regx = /\b\d+\b|\d+px\b|\b\d{1,2}vh\b|auto/
        return regx.test(v)
      }
    }
  },
  data () {
    return {
      isScrollBar: false, // 控制width 是否为 fit-content (true -> 开启滚动条)
      firefox: false, // 是否为火狐
      isRep: false, // 是否需要兼容
      contentWidth: 0, // 实际宽度
      fn: () => {}, // 辅助函数
      offsetTop: null, // 顶部距离
      Height: null, // 宽
      Width: null, // 高
      offsetLeft: null, // 左侧距离
      isBottom: false, // 是否到底
      timer: null
    }
  },
  computed: {},
  watch: {},
  created () {
    if (this.fixed && this.native) {
      var delay
      delay = this.delay >= 200 && this.delay <= 1000 ? this.delay : 300
      this.fn = this.__Throttle(this._initWheel, delay)
      delay = null
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 组件加载完毕则触发页面监听
      if (!this.native) {
        this.isAgent()
        this._initFixed()
        if (this.static) this.currentWidth()
      }
    })
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {
    if (!this.native) {
      this.currentWidth()
      this._initFixed()
    }
  },
  beforeDestroy () {
    this.timer && clearTimeout(this.timer)
  },
  destroyed () {
    this.fn = null
  },
  activated () {},
  methods: {
    /**
     * 辅助函数
     */
    __computedView () {
      var el = this.$el
      if (this.fixed) {
        this._initWheel()
        this.Width = el.getBoundingClientRect().width
        this.offsetLeft = this.$mount(
          this.$refs.barRef
        ).$el.getBoundingClientRect().left
        var scroll = this.$mount(this.$refs.barRef).$el.getElementsByClassName(
          'is-horizontal'
        )[0].children[0]
        var realWidth = (this.Width / this.contentWidth) * 100
        if (realWidth < 98) {
          // 当实际宽度不需要显示滚动条则不会显示滚动条
          scroll.style.width = `${realWidth}%`
        } else {
          scroll.style.width = ''
        }
        // console.log(this)
        this._resetStyle()
        scroll = null
      }
      this.isScrollBar =
        this.contentWidth * 0.99 > el.getBoundingClientRect().width
      el = null
    },
    /**
     * 计算表格内容实际宽度,判断时候需要显示滚动条(由fit-content属性控制)
     */
    currentWidth () {
      this.timer = setTimeout(() => {
        this.contentWidth = this.$slots.default[0].elm
          .getElementsByClassName('el-table__header')[0]
          .getBoundingClientRect().width
        this.isScrollBar =
          this.contentWidth * 0.99 > this.$el.getBoundingClientRect().width
        this.timer && clearTimeout(this.timer)
        this.timer = null
      }, 100)
    },
    /**
     * 检测浏览器是否为IE,Edge
     * 如果是,则进行兼容性处理(修改属性,进行兼容性处理)
     */
    isAgent () {
      var userAgent = window.navigator.userAgent.toLowerCase()
      if (userAgent.indexOf('firefox') > -1) this.firefox = true // 判断是否是火狐，是则需要增加 -moz- 前缀
      // console.log(userAgent)
      if (
        userAgent.indexOf('trident') > -1 ||
        userAgent.indexOf('windows nt') > -1
      ) {
        this.isRep = true
      }
      userAgent = null
    },
    /**
     * 计算相关参数，开启fixed
     */
    _initFixed () {
      if (this.fixed) {
        var el = this.$slots.default[0].elm
        this.Width = el.getBoundingClientRect().width
        this.offsetLeft = this.$mount(
          this.$refs.barRef
        ).$el.getBoundingClientRect().left
        this.offsetTop = el.getBoundingClientRect().top
        this.Height = el.getBoundingClientRect().height
        el = null
      }
    },
    /**
     * 监听鼠标滚轮事件
     */
    _initWheel (ev) {
      var window = this.getClientHeight() // 可视区域高度
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop // 滚动条高度
      this.isBottom =
        (window + scrollTop) * 0.992 < this.offsetTop + this.Height // 0.995 粘滞系数
      this._resetStyle()
    },
    /**
     * 修改属性
     */
    _resetStyle () {
      var el = this.$mount(this.$refs.barRef).$el.getElementsByClassName(
        'el-scrollbar__bar is-horizontal'
      )[0]
      if (this.fixed) {
        if (this.isBottom) {
          el.style.width = `${this.Width}px`
          el.style.position = `fixed`
          el.style.left = `${this.offsetLeft}px`
          el.style.bottom = `${this.bottom}px`
          el.style['z-index'] = 100
        } else {
          el.style.width = ``
          el.style.position = ``
          el.style.left = ``
          el.style.bottom = ``
        }
      }
      el = null
    },
    /**
     * 获取窗口可视区域高度
     */
    getClientHeight () {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight =
          document.body.clientHeight < document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight
      } else {
        clientHeight =
          document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight
      }
      return clientHeight
    },
    /**
     * 节流函数
     * @param method 事件触发的操作,fn
     * @param delay 间隔多少毫秒需要触发一次事件
     * @returns {Function}
     */
    __Throttle (method, delay = 500) {
      let timer
      let args = arguments
      let start
      return function loop () {
        let self = this
        let now = Date.now()
        if (!start) {
          start = now
        }
        if (timer) {
          clearTimeout(timer)
        }
        if (now - start >= delay) {
          method.apply(self, args)
          start = now
        } else {
          timer = setTimeout(function () {
            loop.apply(self, args)
          }, 50)
        }
      }
    }
  }
}
</script>

<style>
.elTableBar .el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}
</style>
