import Vue from 'vue'
import Vuex from 'vuex'
import NotesStore from './notes'
import ConfigStore from './config'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
    notes: NotesStore,
    config: ConfigStore
  }
})
