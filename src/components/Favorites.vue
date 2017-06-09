<template>
  <div id="sidebar" class="col-xs-3 text-center">
    <h2>Favorites</h2>
    <div id="favoriteResults">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#sidebar {
  background-color: #7A5DC7;
}

#favoriteResults {
  border-top: 2px solid black;
  color: black;
  padding: 5px;
}

#favoriteResults  a {
  color: black;
  padding-top: 5px;
}

#favoriteResults button {
  float: right;
}
</style>
