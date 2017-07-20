// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import CardContent from './components/Card/CardContent'
import Modal from './components/Modal/Modal'
import Table from './components/Table/Table'
import TableRow from './components/Table/TableRow'
import TableHead from './components/Table/TableHead'
import TableCell from './components/Table/TableCell'
import Checkbox from './components/Checkbox/Checkbox'
import List from './components/List/List.vue'
import ListItem from './components/List/ListItem.vue'
import ListExpand from './components/List/ListExpand.vue'

Vue.config.productionTip = false

Vue.component('md-button', Button)
Vue.component('card', Card)
Vue.component('card-content', CardContent)
Vue.component('modal', Modal)
Vue.component('md-table', Table)
Vue.component('md-table-row', TableRow)
Vue.component('md-table-head', TableHead)
Vue.component('md-table-cell', TableCell)
Vue.component('md-checkbox', Checkbox)
Vue.component('list', List)
Vue.component('list-item', ListItem)
Vue.component('list-expand', ListExpand)
Vue.component('md-table-header', {
  functional: true,
  render: (h, scope) => h('thead', {
    'class': {
      'table-header': true
    }
  }, scope.children)
})
Vue.component('md-table-body', {
  functional: true,
  render: (h, scope) => h('tbody', {
    'class': {
      'table-body': true
    }
  }, scope.children)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
