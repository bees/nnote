import moment from 'moment'

export default {
  state: {
    currentNote: {
      title: 'Current Note',
      markdown: 'neat this is the actual note how cool is that wow heck'
    },
    pinnedNotes: [
      'pinned note 1 very long title wow heck too long oh no',
      'pinned note 2',
      'pinned note 3',
      'pinned note 4'
    ],
    previewItems: [
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      },
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      },
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      },
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      },
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      },
      {
        title: 'note title',
        date: moment().format('L'),
        preview: 'note body preview copy wow heck'
      }
    ],
    recentNotes: [
      'recent note 1',
      'recent note 2',
      'recent note 3',
      'recent note 4'
    ],
    searchInput: ''
  },
  mutations: {
    updateSearchInput (state, searchTerm) {
      state.searchInput = searchTerm
    }
  },
  actions: {
    updateSearch ({commit, state}, searchTerm) {
      commit('updateSearchInput', searchTerm)
    }
  }
}
