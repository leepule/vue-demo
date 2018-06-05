/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = ''
let routerMode = 'history'
let baseImgPath = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin'
} else {
  baseUrl = 'http://localhost:8090/'
}

module.exports = {
  baseUrl,
  routerMode,
  baseImgPath
}
