import Vue from 'vue'
import Router from 'vue-router'
import SplitList from '@/views/SplitList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SplitList
    }
  ]
})
