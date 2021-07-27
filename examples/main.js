/*
 * @Author: jdeseva
 * @Date: 2020-05-22 09:15:14
 * @LastEditors: jdeseva
 * @LastEditTime: 2021-07-27 09:27:03
 * @Description: main.js
 */
import Vue from 'vue'
import App from './App.vue'
import { Scrollbar, Table, Col, Row, TableColumn, Button, Pagination, Dialog } from 'element-ui'

import ElTableBar from '../packages/index'

Vue.config.productionTip = false

const components = [Scrollbar, Table, Col, Row, TableColumn, Button, Pagination, Dialog, ElTableBar]

components.map(component => Vue.use(component))

new Vue({
  render: h => h(App)
}).$mount('#app')
