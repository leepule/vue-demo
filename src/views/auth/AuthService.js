import fetch from '@/util/fetch'

/**
 * 登陆
 */
const login = data => fetch('/auth/login', data, 'post')

export default {
  login
}
