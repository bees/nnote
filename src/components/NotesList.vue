<template>
 <dl class="preview-items">
   <div v-for="item in previewItems" class="preview-item">
     <dt class="item-title">
       <span class="title">
         {{ item.title }}
       </span>
       <span class="date">
         {{ item.date }}
       </span>
     </dt>
     <dd class="preview">
       {{ item.preview }}
     </dd>
   </div>
 </dl>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    previewItems: state => state.notes.previewItems
  })
}
</script>

<style lang="scss">
@import  "../styles/variables.scss";
.preview-items{
  background: $list-bg;
  overflow-y: scroll;
  margin: 0;
}

.preview-item {
  margin: 1em;
  background: $list-item-bg;

  .item-title {
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;

    .title {
      font-weight: bold;
      font-size: 1.5em;
    }
    .date {
      font-weight: normal;
      font-size: .8em;
    }
  }

  .preview {
    margin: 0;
    padding: 0 1rem 1rem;
  }
}
</style>
