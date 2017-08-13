<template>
  <aside class="navigation-bar">
    <header class="user-profile">
        <router-link class="logo" :to="{ name: 'Home' }">
          <img src="/static/logo.svg"></img>
        </router-link>
      <h3 class="username">{{ name }}</h3>
    </header>

    <input
      placeholder="Search..."
      class="search"
      v-model="searchModel"
      type="text"
    >
    <section class="navigation-section">
      <h3 class="section-title">
        Pinned Notes
      </h3>
      <ul class="navigation-list">
        <li
          v-for="note in pinnedNotes"
          class="navigation-list-item"
        >
         <router-link to="note">
           {{ note }}
         </router-link>
        </li>
      </ul>
    </section>
    <section class="navigation-section">
      <h3 class="section-title">
        Recent Notes
      </h3>
      <ul class="navigation-list">
        <li
          v-for="note in recentNotes"
          class="navigation-list-item"
        >
         <router-link to="note">
           {{ note }}
         </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      pinnedNotes: state => state.notes.recentNotes,
      name: state => state.config.name,
      recentNotes: state => state.notes.recentNotes,
      searchInput: state => state.notes.searchInput
    }),
    searchModel: {
      get () {
        return this.searchInput
      },
      set (searchTerm) {
        this.$store.dispatch('updateSearch', searchTerm)
      }
    }
  }
}
</script>

<style lang="scss">
@import  "../styles/variables.scss";

.navigation-bar {
  grid-row: [top]/[bottom];
  display: grid;
  grid-template-rows: [top] 5rem [userprofile] 3rem [search] auto [pinned] auto [bottom];
  justify-items: stretch;
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
    margin: 0 1rem;
  }

  .username {
    padding: 0 1rem;
  }
}

.search {
  height: 2em;
  text-align: center;
  background: $search-bg;
}

.navigation-section {
  margin: 1rem;
  .navigation-list {
    margin: 0;
    padding: 0;
    .navigation-list-item {
      list-style-type: none;
      text-overflow: ellipsis;
    }
  }
}
</style>
