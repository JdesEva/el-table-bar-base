import Vue from 'vue'

declare class ElementUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

export declare class ElTableBar extends ElementUIComponent {
  /** 自适应模式 */
  fixed?: boolean

  /** 滚动条底部距离 */
  bottom?: number

  /** 滚轮响应延迟 */
  delay?: number

  /** 静态模式 */
  static?: boolean
}
