<template>
  <div>
    <app-search></app-search>
    <app-results></app-results>
  </div>
</template>

<script>
import Search from './Search.vue'
import Results from './Results.vue'

export default {
  components: {
    appSearch: Search,
    appResults: Results
  }
}
</script>

<style lang="css">
</style>
