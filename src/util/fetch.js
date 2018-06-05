import axios from './http'
import $ from 'jquery'
/*
 axios#request(config)
 axios#get(url[, config])
 axios#delete(url[, config])
 axios#head(url[, config])
 axios#options(url[, config])
 axios#post(url[, data[, config]])
 axios#put(url[, data[, config]])
 axios#patch(url[, data[, config]])
 */

export default async (url = '', data = {}, type = 'POST') => {
  type = type.toLowerCase()
  // url = baseUrl + url

  return new Promise((resolve, reject) => {
    var request = null
    if (type === 'post' || type === 'put' || type === 'patch') {
      request = axios({
        method: type,
        url: url,
        data: data
      })
    } else if (type === 'form') {
      var transform = $.param(data)
      request = axios({
        method: 'post',
        url: url,
        data: transform,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    } else if (type === 'down') {
      // var transform = $.param(data)
      request = axios({
        method: 'post',
        url: url,
        data: data,
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      })
    } else {
      request = axios({
        method: type,
        url: url,
        params: data
      })
    }
    console.log(request)
    request.then(response => {
      console.log(response)
      // loading
      // 如果http状态码正常，则直接返回数据
      console.log(11111111)
      // console.log(response.data)
      if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        resolve(response.data)
      }
      if (response && response.status === 500) {
        resolve({
          header: {code: 500, message: '服务器错误'}
        })
      }
      // 异常状态下，把错误信息返回去
      resolve({
        header: {code: -404, message: '网络异常'}
      })
    }, err => {
      console.log(22222222)
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
