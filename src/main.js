import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 

Vue.config.productionTip = false
import api from './api/api'
Vue.prototype.$api = api

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
