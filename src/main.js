import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/common.css'
import './plugins/element.js'
Vue.config.productionTip = false
import api from '../src/request/api.js' // 导入api接口
Vue.prototype.$api = api
import store from './store/index.js'
Vue.prototype.$store = store
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
