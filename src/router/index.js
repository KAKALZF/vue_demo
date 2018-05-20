import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeLogin from '@/components/Home'
import User from '@/components/User'
import HomeHeader from '@/page/home/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeHeader
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
