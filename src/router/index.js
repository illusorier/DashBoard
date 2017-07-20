import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Button from '@/pages/ButtonDoc'
import Card from '@/pages/CardDoc'
import InkRipple from '@/pages/InkRippleDoc'
import Modal from '@/pages/ModalDoc'
import SideNav from '@/pages/SideNavDoc'
import Table from '@/pages/TableDoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/components/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/components/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/components/ink-ripple',
      name: 'InkRipple',
      component: InkRipple
    },
    {
      path: '/components/modal',
      name: 'Modal',
      component: Modal
    },
    {
      path: '/components/side-nav',
      name: 'SideNav',
      component: SideNav
    },
    {
      path: '/components/table',
      name: 'Table',
      component: Table
    }
  ]
})
