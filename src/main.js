import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import 'normalize.css'
import VueQuillEditor from 'vue-quill-editor'

import router from './router'
import store from './store'
import App from './views/App'

Vue.use(VueQuillEditor)
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
