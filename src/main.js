// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import './plugins/element.js'
// // 导入全局样式表
// import 'assets/css/global.css'
// // 导入字体图标
// import 'assets/fonts/iconfont.css'
//
// import axios from 'axios'
// // 配置请求根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios.interceptors.request.use(config => {
//   // 为请求头对象，添加Token验证的Authorization字段
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//     return config
// })
// // 挂载到vue的原型属性上
// Vue.prototype.$http = axios
//
//
// Vue.config.productionTip = false
//
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
