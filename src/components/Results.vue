<template>
  <div>
    <div v-if="recipes.length">
      <ul class="list-group resultsList">
        <div v-for="(recipe, index) in recipes">
          <li style="height: 100%">
            <a v-bind:href="recipe.source.sourceRecipeUrl" target="_blank" id="url">
              <div id="name"> <strong>{{ recipe.name }}</strong></div>
            </a>
            <div>
              <img :src="recipe.images[0].hostedMediumUrl">
            </div>
            <div>
              <button type="button" class="btn btn-warning btn-small star" @click="saveFave(index)">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
            </div>
            <div id="rating">
              Yummly Rating: {{ recipe.rating }}
            </div>
            <div id="time">
              Total Time: {{ recipe.totalTime }}
            </div>
          </li>
        </div>
      </ul>
      <div id="moreResultsButton">
        <button class="btn btn-default" value="Search" id="moreButton" @click="searchAgain">
          More Results
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recipes: [],
      searchUrl: '',
      favorites: []
    }
  },
  created: function () {
    if (!this.$localStorage.get('favorites')) {
      this.$localStorage.set('favorites', JSON.stringify(this.favorites));
    }
    this.favorites = JSON.parse(this.$localStorage.get('favorites'), []);
    this.$bus.$on('event', (data) => {
      this.recipes = [];
      this.searchUrl = data.searchUrl;
      data.results.matches.forEach(recipe => {
        this.$http.get(`http://api.yummly.com/v1/api/recipe/${recipe.id}?_app_id=340d1d95&_app_key=7e0092d58dd4c8cac6f79cde2a9e786f`)
        .then(response => {
          this.recipes.push(response.data);
        });
      });
    });
  },
  methods: {
    searchAgain: function () {
      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      // To get different results than original search
      const startValue = getRandomInt(11, 100);
      this.$http.get(`${this.searchUrl}&start=${startValue}`).then(response => {
        response.body.matches.forEach(recipe => {
          this.$http.get(`http://api.yummly.com/v1/api/recipe/${recipe.id}?_app_id=340d1d95&_app_key=7e0092d58dd4c8cac6f79cde2a9e786f`)
          .then(data => {
            this.recipes.push(data.data);
          });
        });
      });
    },
    saveFave: function (index) {
      const fave = {
        name: this.recipes[index].name,
        url: this.recipes[index].source.sourceRecipeUrl,
        image: this.recipes[index].images[0].hostedMediumUrl
      };
      this.favorites.push(fave);
      this.$localStorage.set('favorites', JSON.stringify(this.favorites));
      this.$bus.$emit('fave', fave);
    }
  }
}
</script>

<style lang="css">

.resultsList li {
  float: left;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  background-color: white;
  color: black;
  width: 33%;
  vertical-align: middle;
  line-height: 100%;
}

.resultsList {
  width: 100%;
  margin-left: 15%;
}

.resultsList li div {
  padding: 5px;
}

#moreResultsButton {
  margin: 5px;
  margin-bottom: 10px;
  position: relative;
  clear: both;
}

#moreButton {
  width: 15%;
  background-color: #7A5DC7;
}

.btn-warning {
  height: 20px;
  width: 20px;
}

.glyphicon-star {
  position: relative;
  text-align: center;
  right: 7px;
  top: -8px;
}

@media(max-width: 1000px) {
  #moreButton {
    min-width: 50%;
  }
}

@media(max-width: 899px) {
  .resultsList li {
    width: 40%;
  }
}

@media(max-width: 780px) {
  .resultsList li {
    width: 45%;
  }
}

@media(max-width: 679px) {
  .resultsList img {
    max-width: 80%;
  }
}

@media(max-width: 593px) {
  #moreButton {
    min-width: 75%;
  }
  .resultsList li {
    width: 75%;
  }
}

@media(max-width: 460px) {
  #rating {
    display: none;
  }
  #time {
    display: none;
  }
  .resultsList li {
    overflow: scroll;
  }
  #moreButton {
    overflow: hidden;
  }
}

@media(max-width: 365px) {
  #moreButton {
    font-size: 0.9em;
  }
}

@media(max-width: 333px) {
  #moreButton {
    font-size: 0.8em;
  }
}
</style>
