import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)

/**
 * 创建一个axios实例
 */
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})
export default service
