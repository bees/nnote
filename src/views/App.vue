<template>
  <main id="app">
    <sidebar></sidebar>
    <router-view></router-view>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  methods: mapActions([
    'bootstrap'
  ]),
  created () {
    this.bootstrap()
  }
}
</script>

<style lang="scss">
@import  "../styles/variables.scss";

#app {
  display: grid;
  grid-template-columns: [left] 15rem [sidebar]  auto [right];
  grid-template-rows: [top] 5rem [userprofile] auto [bottom];
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

body, input, * {
  font-family: roboto;
}

a {
  color: $link-color;
  text-decoration: none;
  &:hover {
    color: $link-hover;
    text-decoration: underline;
  }
}
</style>
