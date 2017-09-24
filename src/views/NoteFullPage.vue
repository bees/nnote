<template>
    <note-editor></note-editor>
</template>

<script>
import NoteEditor from '@/components/NoteEditor'

export default {
  components: {
    NoteEditor
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.full-page-note {
  background: $editor-bg;
  height: 100vh;
}

</style>
