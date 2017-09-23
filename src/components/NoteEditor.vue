<template>
    <div class="note-card">
      <h1>{{currentNote.title}}</h1>
      <textarea v-model="markdown" class="markdown-editor">
      </textarea>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
.class {
  box-sizing: border-box;
  width: 100%;
}
</style>
