<template>
  <section class="full-preview">
    <section class="note-card">
      <header class="card-header">
        <h1 class="title">{{title}}</h1>
      </header>
      <article class="card-body">
        <vue-markdown
          :source="markdown"
           class="markdown-body"
        >
        </vue-markdown>
      </article>
      <hr>
      <footer class="card-footer">
      </footer>
    </section>
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
    title: state => state.currentNote.title,
    markdown: state => state.currentNote.markdown
  })
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.full-preview {
  background: $editor-bg;
  grid-row: top/bottom;
  overflow-y: scroll;
}

.note-card {
  background: $note-card-bg;
  margin: 1rem;
  .card-header {
    .title {
      margin: 0;
    }
    padding: 1rem 1rem 0;
  }
  .card-body, .card-footer {
    padding: 1rem;
  }
}

.markdown-body {
  font-family: roboto;
}
</style>
