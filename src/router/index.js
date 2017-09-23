import Vue from 'vue'
import Router from 'vue-router'

import SplitList from '@/views/SplitList'
import NoteFullPage from '@/views/NoteFullPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SplitList
    },
    {
      path: '/new-note',
      name: 'newNote',
      component: NoteFullPage
    }
  ]
})
