import Vue from 'vue'
import VueMeta from 'vue-meta'
import './style.css'
import App from './App.vue'
import router from './router'

Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
