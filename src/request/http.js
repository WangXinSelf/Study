/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import QS from 'qs'
import { Message } from 'element-ui'
import router from '../router'
// import VueRouter from 'vue-router'
// if (!window.VueRouter) Vue.use(Router)
// import store from '../store/index'
const requestLists = []
// 环境的切换

// 请求超时时间
axios.defaults.timeout = 30000 //30s请求时间

// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8'
axios.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded; charset=UTF-8'
// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     // const token = store.state.token;
//     // token && (config.headers.Authorization = token);
//     // return config;
//   },
//   error => {
//     // return Promise.error(error)
//   }
// )

// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    // console.log(response.data)
    switch (response.data.error_code) {
      case 415:
        if (store.state.longinStatus == true) {
          Message({
            message: '登录过期，请重新登录',
            type: 'warning',
            duration: 1000,
            forbidClick: true
          })
          // 清除token
          localStorage.removeItem('device_info')
          store.state.longinStatus = false
          setTimeout(() => {
            router
              .replace({
                path: '/'
              })
              .catch(err => {})
          }, 1000)
        }
        break
      case 400:
        Message({
          message: '服务器异常，请稍后重试',
          type: 'error',
          duration: 1000,
          forbidClick: true
        })
        break
      case 502:
        Message({
          message: '服务器出小差啦，请稍后重试',
          type: 'error',
          duration: 1000,
          forbidClick: true
        })
        break
    }

    return Promise.resolve(response)
  } else {
    Message({
      message: '服务器异常，请稍后重试',
      type: 'error',
      duration: 1000,
      forbidClick: true
    })
    return Promise.reject(response)
  }
})
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  // console.log(url)
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        store.state.loading = false
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  // let auth = localStorage.getItem('device_info')
  // console.log(url)
  return new Promise((resolve, reject) => {
    axios
      .post(url,params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        store.state.loading = false
        reject(err.data)
      })
  })
}
