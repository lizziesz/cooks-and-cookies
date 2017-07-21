<template>
  <div id="sidebar" class="col-xs-3 text-center">
    <h2>Favorites</h2>
    <div id="favoriteResults" v-if="this.favorites.length">
      <div v-for="(favorite, index) in favorites">
        <div class="fave">
          <button type="button" class="btn btn-danger btn-small remove" @click="removeFave(index)">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <div id="faveContent">
            <a v-bind:href="favorite.url" target="_blank" id="url">
              <div id="name">
                <strong>{{ favorite.name }}</strong>
              </div>
            </a>
            <div>
              <img :src="favorite.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favorites: []
    }
  },
  created: function () {
    // if there is no local storage, make sure the value isn't null
    if (!this.$localStorage.get('favorites')) {
      this.$localStorage.set('favorites', JSON.stringify(this.favorites))
    }
    this.favorites = JSON.parse(this.$localStorage.get('favorites'), [])
    this.$bus.$on('fave', (data) => {
      this.favorites.push(data)
    })
  },
  methods: {
    removeFave: function (index) {
      this.favorites.splice(index, 1)
      this.$localStorage.set('favorites', JSON.stringify(this.favorites))
    }
  }
}
</script>

<style lang="css">
#sidebar {
  background-color: #7A5DC7;
  margin-left: 0;
  width: 25%;
}

#favoriteResults {
  border-top: 2px solid black;
  color: black;
  padding: 5px;
  padding-left: 15px;
}

#favoriteResults  a {
  color: black;
  padding-top: 5px;
}

#favoriteResults button {
  float: right;
}

.fave {
  margin: 10px 0;
  padding: 10px;
  height: 210px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 5px;
  text-align: left;
  overflow: scroll;
}

#favoriteResults img {
  width: 75%;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  float: left;
  border-radius: 12px;
}

.remove {
  float: right;
  margin-top: 0px;
}

.glyphicon-remove {
  position: relative;
  text-align: center;
  right: 7px;
  top: -5px;
}

.btn-danger {
  height: 25px;
  width: 25px;
  position: relative;
  left: 10px;
  top: -10px;
}

@media(max-width: 1625px) {
  .fave img {
    height: 150px;
  }
}

@media(max-width: 1400px) {
  .fave {
    height: 222px;
  }
}

@media(max-width: 1200px) {
  .fave {
    height: 200px;
  }
}

@media(max-width: 1000px) {
  .fave {
    height: 170px;
    font-size: 0.75em;
  }
}

@media(max-width: 899px) {
  #sidebar {
    min-width: 33%;
  }
}

@media(max-width: 679px) {
  #sidebar {
    width: 45%;
  }
}

@media(max-width: 593px) {
  #sidebar {
    min-width: 50%;
  }
}

@media(max-width: 500px) {
  .fave {
    height: 150px;
  }
}

@media(max-width: 460px) {
  .fave {
    height: 140px;
  }
}

@media(max-width: 400px) {
  #name {
    font-size: 0.8em;
  }
  .fave {
    height: 130px;
  }
}
</style>
