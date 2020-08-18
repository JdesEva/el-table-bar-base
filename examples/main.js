import Vue from 'vue'
import App from './App.vue'
import { Scrollbar, Table, Col, Row, TableColumn, Button, Pagination } from 'element-ui'

import ElTableBar from '../packages/index'

Vue.config.productionTip = false

Vue.use(Scrollbar)

Vue.use(Table)

Vue.use(Col)

Vue.use(Row)

Vue.use(TableColumn)

Vue.use(Button)

Vue.use(Pagination)

Vue.use(ElTableBar)

new Vue({
  render: h => h(App)
}).$mount('#app')
