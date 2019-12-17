// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
// Vue.prototype.URLT = 'https://www.quicktodo.app'
Vue.prototype.URLT = 'http://113.204.20.254:8181'

Vue.use(ElementUI, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})

