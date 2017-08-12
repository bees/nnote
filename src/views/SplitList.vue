<template>
  <div class="split-layout">
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
  height: 100vh;
}
</style>
