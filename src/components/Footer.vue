<template>
  <div class="row">
    <footer class="col-xs-12">
      <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span>
      <p> Copyright 2016. </p>
      <div id="yummly" v-if="attribution.html">
        Recipe search powered by <a href="attribution.url"><img :src="attribution.logo" alt="Yummly" /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attribution: {}
    };
  },
  created () {
    this.$bus.$on('event', (data) => {
      this.attribution = data.attribution;
    });
  }
}
</script>

<style lang="css">
footer {
  background-color: #F84F3E;
  padding: 20px;
  color: black;
  text-align: center;
  margin-left: 15px;
}

footer span {
  float: left;
  color: white;
}

footer p {
  color: white;
  float: left;
  margin-left: 5px;
}

.row {
  max-width: 100%;
}

@media(max-width: 500px) {
  .row {
    min-width: 100%;
  }
}

@media(max-width: 333px) {
  footer p {
    font-size: 0.8em;
  }
}
</style>
