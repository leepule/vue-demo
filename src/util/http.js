/**
 * http配置
 */

import axios from 'axios'
import {baseUrl} from '@/config/env'

import store from '@/store/'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = baseUrl

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //    config.headers.Authorization = `token ${store.state.token}`;
    // }
    store.dispatch('showLoading')
    return config
  },
  err => {
    store.dispatch('hideLoading')
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    store.dispatch('hideLoading')
    console.log(response)
    if (response.data.code === 20000) {
      router.push('/auth/login')
    }
    return response
  },
  error => {
    store.dispatch('hideLoading')

    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('LOGOUT')

          router.replace({
            path: '/',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }

    // console.log(JSON.stringify(error));
    // console : Error: Request failed with status code 402
    return Promise.resolve(error.response)
    // return Promise.reject(error.response.data)
  })

export default axios
