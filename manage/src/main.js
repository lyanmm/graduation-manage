import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/iview'
import {Http} from "@/http";

Vue.config.productionTip = false
Vue.prototype.$Http = Http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
