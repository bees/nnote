<template>
  <aside class="navigation-bar">
    <header class="user-profile">
      <figure class="logo">
        <object type="image/svg+xml" data="/static/logo.svg"></object>
      </figure>
      <h3 class="username">{{ name }}</h3>
    </header>

    <input
      placeholder="Search..."
      class="search"
      v-model="searchInput"
      type="text"
    >
  </aside>
</template>

<script>
export default {
  data () {
    return {
      name: 'arian',
      searchInput: ''
    }
  }
}
</script>

<style lang="scss">
@import  "../styles/variables.scss";

.navigation-bar {
  grid-row: [top]/[bottom];
  display: grid;
  grid-template-rows: [top] 5rem [userprofile] auto [bottom];
  justify-items: center;
  background: $sidebar-bg;
  color: $sidebar-copy;
}

.user-profile {
  grid-row: [top]/[userprofile];
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: 0 1em;
  }

  .username {
    padding: 0 1em;
  }
}

.search {
  width: 90%;
  height: 2em;
  text-align: center;
}

</style>
