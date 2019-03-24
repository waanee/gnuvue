import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
