<template>
  <div class="elTableBar" @mouseenter="currentWidth">
    <el-scrollbar ref="bar" :noresize="false" wrap-class="scrollbar-wrapper">
      <div
        :style="`width:${!isScrollBar ? '100%' : (!isRep ? 'fit-content' : contentWidth + 'px')}`"
      >
        <slot/>
      </div>
    </el-scrollbar>
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
  props: {},
  data () {
    return {
      isScrollBar: false, // 控制width 是否为 fit-content (true -> 开启滚动条)
      isRep: false, // 是否需要兼容
      contentWidth: 0 // 实际宽度
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.$nextTick(() => {
      // 组件加载完毕则触发页面监听
      this.currentWidth()
      this.isAgent()
      console.log(window.navigator.userAgent)
    })
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {},
  methods: {
    /**
     * 计算表格内容实际宽度,判断时候需要显示滚动条(由fit-content属性控制)
     */
    currentWidth () {
      try {
        this.contentWidth = this.$slots.default[0].elm.getElementsByClassName(
          'el-table__header'
        )[0].offsetWidth
        this.isScrollBar = this.contentWidth > this.$el.offsetWidth
        this._initWidth()
      } catch (err) {
        throw new Error('The width is computed error!')
      }
    },
    /**
     * 检测浏览器是否为IE,Edge,FireFox
     * 如果是,则进行兼容性处理(修改属性,进行兼容性处理)
     */
    isAgent () {
      var userAgent = window.navigator.userAgent.toLowerCase()
      if (
        userAgent.indexOf('trident') > -1 ||
        userAgent.indexOf('edge') > -1 ||
        userAgent.indexOf('firefox') > -1
      ) {
        this.isRep = true
      }
    },
    /**
     * 当窗口第一次缩小时(特指通过最大化按钮最大化变为正常状态，即不是手动拖拽改变窗口大小的情况)
     * el-scrollbar滚动条并不会计算真实宽度所占比，需要手动计算
     */
    _initWidth () {
      var el = this.$refs.bar.$el.getElementsByClassName('is-horizontal')[0]
        .children[0]
      var realWidth = (this.$el.offsetWidth / (this.contentWidth + 1)) * 100
      if (el.offsetWidth === 0 && realWidth < 100) {
        el.style.width = `${realWidth}%`
      } else if (realWidth >= 100) {
        el.style.width = 0
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
