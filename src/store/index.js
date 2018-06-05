import Vue from 'vue'
import Vuex from 'vuex'

// 模块化 store,不应该都写在一个文件上
import user from '@/common/store/UserInfoStore'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
