import authService from '@/views/auth/AuthService'

const state = {
  userInfo: {
    userId: null,
    userName: null,
    avatar: 'default.jpg'
  }
}

const mutations = {
  saveUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async getUserData ({commit}) {
    try {
      const res = await authService.getInfo()
      if (res.status === 1) {
        commit('saveUserInfo', res.data)
      } else {
        throw new Error(res)
      }
    } catch (err) {
      console.log('您尚未登陆或者session失效')
    }
  }
}

export default {
  state,
  actions,
  mutations
}
