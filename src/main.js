import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';

Vue.use(ElementUI)

import './scss/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
