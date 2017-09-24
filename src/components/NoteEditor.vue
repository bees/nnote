<template>
  <div class="editor">
      <h1 class="title">{{currentNote.title}}</h1>
      <!-- has some auto-height js that is fucking with css grid -->
      <quill-editor v-model="content"></quill-editor>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  },
  data () {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState({
      currentNote: state => state.currentNote
    }),
    markdown: {
      get () {
        return this.currentNote.markdown
      },
      set (markdown) {
        const spec = this.currentNote
        spec.markdown = markdown
        this.$store.dispatch('updateNote', spec)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
.editor {
  display: grid;
  grid-template-rows: [top] 3em [editor] auto [bottom];
  .title {
    grid-row: top/editor;
  }
}
.quill-editor {
  grid-row: editor/bottom;
}
.ql-toolbar {
  background: $editor-toolbar-bg;
}
.ql-editor {
  background: $editor-content-bg;
}
</style>
