/** 导出组件 */

import ElTableBar from './ElTableScrollBar/index.js'

const components = [
  ElTableBar
]

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
