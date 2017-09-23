<template>
  <div class="split-layout">
    <section class="noteslist-nav">
      <button @click="$store.dispatch('newNote')" class="new-note">
        new note
      </button>
    </section>
    <notes-list></notes-list>
    <note-full-preview></note-full-preview>
  </div>
</template>

<script>
import NotesList from '@/components/NotesList'
import NoteFullPreview from '@/components/NoteFullPreview'

export default {
  components: {
    NoteFullPreview,
    NotesList
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.split-layout {
  display: grid;
  grid-template-columns: [left] minmax(25%, 25rem) [split] auto [right];
  grid-template-rows: [top] 2em [controls] auto [bottom];
  height: 100vh;
}

.noteslist-nav {
  display: flex;
  align-items: stretch;
}
</style>
