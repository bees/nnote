<template>
  <section class="full-preview">

    <div class="note-card">
      <h1>{{title}}</h1>
      <vue-markdown
        :source="markdown"
         class="test"
      >
      </vue-markdown>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      title: 'current note preview',
      markdown: 'wow'
    }
  }
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
</style>
