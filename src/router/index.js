import Vue from 'vue'
import Router from 'vue-router'

// Views
import Login from '@/views/auth/Login'

// home
import Home from '@/views/home/Home'

// 懒加载
// const Work = resolve => require(['../views/Work.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/Home',
      name: '首页',
      component: Home
    },
    {
      path: '/Home',
      name: '首页',
      component: resolve => require(['@/views/home/Home'], resolve)
    }
  ]
})
