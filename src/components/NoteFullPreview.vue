<template>
  <section class="full-preview">

    <div class="note-card">
      <h1>{{title}}</h1>
      <vue-markdown
        :source="markdown"
         class="markdown-body"
      >
      </vue-markdown>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import 'github-markdown-css'
import { mapState } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  computed: mapState({
    title: state => state.notes.currentNote.title,
    markdown: state => state.notes.currentNote.markdown
  })
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.full-preview {
  background: $editor-bg;
  overflow-y: scroll;
}

.note-card {
  background: $note-card-bg;
  margin: 1em;
  padding: 1em;
}

.markdown-body {
  font-family: roboto;
}
</style>
