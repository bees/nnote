import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import removeMD from 'remove-markdown'

import router from '@/router'
import { debounce } from '@/util'

import db from './db'

Vue.use(Vuex)

const state = {
  currentNote: {
    title: '',
    markdown: '',
    preview: '',
    created: '',
    updated: '',
    tags: []
  },
  pinnedNotes: [],
  previewItems: [],
  recentNotes: [],
  searchInput: ''
}
const mutations = {
  updateSearchInput (state, searchTerm) {
    state.searchInput = searchTerm
  },
  updatePinnedNotes (state, notes) {
    state.pinnedNotes = notes
  },
  setUpNewNote (state) {
    // this defines the notes schema for now...
    // need a better solution long term
    state.currentNote.title = 'Untitled Note'
    state.currentNote.markdown = ''
    state.currentNote.preview = ''
    state.currentNote.created = moment()
    state.currentNote.updated = state.currentNote.created
    state.currentNote.tags = []
  },
  setCurrentNoteID (state, id) {
    state.currentNote._id = id
  },
  updateCurrentNote (state, spec) {
    spec.updated = moment()
    state.currentNote = spec
  },
  updatePreviewItems (state, items) {
    state.previewItems = items
  },
  updatePreview (state) {
    let markdown = state.currentNote.markdown
    markdown = markdown.length > 50 ? markdown.substring(0, 50) + '...' : markdown
    state.currentNote.preview = removeMD(markdown)
  },
  displayNote (state, spec) {
    state.currentNote = spec
  }
}

const actions = {
  async bootstrap ({dispatch}) {
    await db.initIndices()
    dispatch('updatePinnedList')
    dispatch('updatePreviewList')
  },
  async updateSearch ({commit, state}, searchTerm) {
    commit('updateSearchInput', searchTerm)
  },
  async newNote ({commit, state}) {
    if (state.route.path !== 'new-note') {
      router.push('new-note')
      commit('setUpNewNote')
      const newID = await db.createNote(state.currentNote)
      commit('setCurrentNoteID', newID)
    } else {
      // TODO: flash a message?
    }
  },
  async updateNote ({commit, dispatch}, spec) {
    commit('updateCurrentNote', spec)
    await dispatch('saveNote')
  },
  async updatePreviewList ({commit}) {
    const updatedResult = await db.loadNotes()
    commit('updatePreviewItems', updatedResult.docs)
  },
  async updatePinnedList ({commit}) {
    const pinnedResult = await db.getPinnedNotes()
    commit('updatePinnedNotes', pinnedResult.docs)
  },
  saveNote: debounce(async function ({state, commit, dispatch}) {
    commit('updatePreview')
    await db.updateNote(state.currentNote)
    // change this so it does it on navigation away from the note
    dispatch('')
  }, 1000),
  async getNoteByID ({commit}, id) {
    const noteDocument = await db.loadNoteById(id)
    noteDocument.created = moment(noteDocument.created)
    noteDocument.updated = moment(noteDocument.updated)
    commit('displayNote', noteDocument)
  }
}

/* eslint-disable no-new */
export default new Vuex.Store({
  actions,
  mutations,
  state
})
