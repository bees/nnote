import Vue from 'vue'
import 'normalize.css'

import router from './router'
import store from './store'
import App from './views/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
