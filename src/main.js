// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/' // 配置接口地址
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$http = axios           // 使用axios替换Vue http模块

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
