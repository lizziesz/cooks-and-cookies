<template>
  <div class="searchDiv">
    <form id="search" class="form-inline" v-on:submit.prevent="onSubmit">
      <div id="searchBar">
        <input type="text" placeholder="What do you want to bake?" id="searchText" class="form-control" required v-model="searchText">
        <button type="submit" class="btn btn-default" value="Search" id="searchButton">Search</button>
      </div>
    </form>
    <div id="error">
      <ul>
      </ul>
    </div>
    <div id="addOptions">
      <button class="btn btn-default" id="addSearchButton" @click="showOptions = !showOptions">Additional Search Options</button>
    </div>
    <div id="hiddenOptions" class="block-center" v-if="showOptions">
      <form class="form-inline">
        <div class="hiddenOptForm" id="holidays">
          <h4>Holidays</h4>
          <ul>
            <li>
              <label>
                <input type="checkbox" value="valentines-day" v-model="holidays"> Valentine's Day
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="st-patricks-day" v-model="holidays"> St. Patrick's Day </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="easter" v-model="holidays"> Easter </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="4th-of-july" name="4th-of-july" v-model="holidays"> Fourth of July </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="halloween" v-model="holidays"> Halloween </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="thanksgiving" v-model="holidays"> Thanksgiving </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="hanukkah" v-model="holidays"> Hanukkah </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="christmas" v-model="holidays"> Christmas </label>
            </li>
          </ul>
        </div>
        <div id="required-ingredients" class="hiddenOptForm">
          <h4>Required Ingredients</h4>
          <ul>
            <li>
              <label>
                <input type="checkbox" value="chocolate+chips" id="check" v-model="required"> Chocolate Chips </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="marshmallows" id="check" v-model="required"> Marshmallows </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="cinnamon" id="check" v-model="required"> Cinnamon </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="peanut+butter" id="check" v-model="required"> Peanut Butter </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="fruit" id="check" v-model="required"> Fruit </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="Nutella" id="check" v-model="required"> Nutella </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="pumpkin" id="check" v-model="required"> Pumpkin </label>
            </li>
          </ul>
        </div>
        <div id="must-avoid" class="hiddenOptForm">
          <h4>Must Avoid</h4>
          <ul>
            <li>
              <label>
                <input type="checkbox" value="Gluten-Free,393" v-model="avoid"> Gluten </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="Egg-Free,397" v-model="avoid"> Eggs </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="Dairy-Free,396" v-model="avoid"> Dairy </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="Peanut-Free,394" v-model="avoid"> Peanuts </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="nuts" name="Tree Nut-Free" id="395" v-model="avoid"> Tree Nuts </label>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      holidays: [],
      required: [],
      avoid: [],
      showOptions: false,
      searchText: '',
      results: {}
    }
  },
  methods: {
    onSubmit: function () {
      let reqUrl = '';
      let holidayUrl = '';
      let avoidUrl = '';
      if (this.required.length) {
        this.required.map(reqIng => {
          reqUrl += `&allowedIngredient[]=${reqIng}`;
        });
      }
      if (this.holidays.length) {
        this.holidays.map(holiday => {
          holidayUrl += `&allowedHoliday[]=holiday^holiday-${holiday}`;
        });
      }
      if (this.avoid.length) {
        this.avoid.map(avoidIng => {
          const array = avoidIng.split(',');
          avoidUrl += `&allowedAllergy[]=${array[1]}^${array[0]}`;
        });
      }
      const apiUrl1 = 'http://api.yummly.com/v1/api/recipes?_app_id=340d1d95&_app_key=7e0092d58dd4c8cac6f79cde2a9e786f&q=';
      const apiUrl2 = '&requirePictures=true&allowedCourse[]=course^course-Desserts';
      const searchUrl = `${apiUrl1}${this.searchText}${apiUrl2}${reqUrl}${holidayUrl}${avoidUrl}`;
      this.$http.get(searchUrl).then(response => {
        this.results = response.body;
        const objectToSend = {
          results: this.results,
          searchUrl: searchUrl,
          attribution: response.body.attribution
        };
        this.$bus.$emit('event', objectToSend);
      });
      this.searchText = '';
      this.holidays = [];
      this.required = [];
      this.avoid = [];
    }
  }
}
</script>

<style lang="css">
#search {
  padding-top: 25px;
}

input {
  margin: 7px;
}

#searchText {
  width: 60%;
}

#searchButton {
  width: 15%;
  background-color: #7A5DC7;
}

#addSearchButton  {
  background-color: #7A5DC7;
}

#error {
  color: red;
}

#addOptions {
  margin: 10px;
}

#hiddenOptions {
  background:rgba(255,255,255,0.5);
  margin: 30px;
  width: 60%;
  justify-content: center;
  display: inline-block;
  padding: 20px;
}

#check {
  display: inline-block;
}

li {
  list-style-type: none;
  display: inline;
}

.searchDiv {
  border-bottom: 2px solid black;
}

@media(max-width: 899px) {
  .hiddenOptForm li {
    padding-left: 0px;
  }
  .hiddenOptForm ul {
    padding-left: 0px;
  }
}

@media(max-width: 780px) {
  #searchText: {
    width: 40%;
    text-overflow: ellipsis;
  }
}

@media(max-width: 767px) {
  #searchText {
    display: inline;
    text-align: center;
  }
}

@media(max-width: 679px) {
  #searchButton {
    width: 40%;
  }
}

@media(max-width: 593px) {
  .hiddenOptForm ul {
    font-size: 0.75em;
  }
  .hiddenOptForm {
    text-align: left;
    position: relative;
    left: -10px;
  }
}

@media(max-width: 532px) {
  .hiddenOptForm ul {
    font-size: 0.6em;
  }
}

@media(max-width: 473px) {
  .hiddenOptForm ul {
    font-size: 0.55em;
  }
}

@media(max-width: 460px) {
  #addSearchButton {
    max-width: 200px;
    overflow: hidden;
    font-size: 0.6em;
  }
  #searchButton {
    overflow: hidden;
  }
}

@media(max-width: 453px) {
  .hiddenOptForm h4 {
    font-size: 1em;
  }
  .hiddenOptForm ul {
    font-size: 0.5em;
  }
}

@media(max-width: 383px) {
  #searchButton {
    font-size: 0.9em;
  }
}

@media(max-width: 360px) {
  #searchButton {
    font-size: 0.85em;
  }
}

@media(max-width: 345px) {
  #searchButton {
    font-size: 0.8em;
  }
  .hiddenOptForm h4 {
    font-size: 0.85em;
  }
}

@media(max-width: 333px) {
  #searchButton {
    font-size: 0.75em;
  }
  .hiddenOptForm {
    text-align: left;
    position: relative;
    left: -10px;
  }
}

@media(max-width: 320px) {
  #searchButton {
    font-size: 0.6em;
  }
}
</style>
