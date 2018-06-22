import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Login from '@/components/Login'
import crud from '@/components/crud'
import Home from '@/page/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/crud',
      name: 'crud',
      component: crud
    }
  ]
})
