<template>
 <dl class="preview-items">
   <div v-for="item in previewItems" class="preview-item">
     <dt class="title">
         {{ item.title }}
     </dt>
     <dd class="preview">
       {{ item.preview }}
     </dd>
   </div>
 </dl>
</template>

<script>
export default {
  data () {
    return {
      previewItems: [
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        },
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        },
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        },
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        },
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        },
        {
          title: 'note title',
          preview: 'note body preview copy wow heck'
        }
      ]
    }
  }
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
  .title {
    padding: 1rem;
    font-weight: bold;
    font-size: 1.5em;
  }

  .preview {
    margin: 0;
    padding: 0 1rem 1rem;
  }
}
</style>
