<template>
  <main id="app">
    <sidebar></sidebar>
    <router-view></router-view>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: [left] 20rem [sidebar]  auto [right];
  grid-template-rows: [top] 5rem [userprofile] auto [bottom];
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: roboto;
}
</style>
