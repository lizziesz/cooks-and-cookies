<template>
  <div id="app">
    <app-header></app-header>
    <div id="mainContent" class="row row-eq-height">
      <app-favorites></app-favorites>
      <div id="main" class="col-xs-9 text-center block-center">
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Favorites from './components/Favorites.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFavorites: Favorites,
    appFooter: Footer
  }
}
</script>

<style>
#mainContent {
  min-height: 40em;
  background-color: lightblue;
}
</style>
