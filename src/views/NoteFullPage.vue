<template>
  <section class="full-page-note">
    <note-editor></note-editor>
  </section>
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
