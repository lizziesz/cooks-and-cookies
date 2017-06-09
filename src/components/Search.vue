<template>
  <div>
    <form id="search" class="form-inline">
      <div id="searchBar">
        <input type="text" placeholder="What do you want to bake?" id="searchText" class="form-control" required>
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
                <input type="checkbox" value="valentines-day" name="valentines-day" v-model="holidays"> Valentine's Day
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="st-patricks-day" name="st-patricks-day" v-model="holidays"> St. Patrick's Day </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="easter" name="easter" v-model="holidays"> Easter </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="fourthJuly" name="4th-of-july" v-model="holidays"> Fourth of July </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="halloween" name="halloween" v-model="holidays"> Halloween </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="thanksgiving" name="thanksgiving" v-model="holidays"> Thanksgiving </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="hanukkah" name="hanukkah" v-model="holidays"> Hanukkah </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="christmas" name="christmas" v-model="holidays"> Christmas </label>
            </li>
          </ul>
        </div>
        <div id="required-ingredients" class="hiddenOptForm">
          <h4>Required Ingredients</h4>
          <ul>
            <li>
              <label>
                <input type="checkbox" value="chocolateChips" name="chocolate+chips" id="check" v-model="required"> Chocolate Chips </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="marshmallow" name="marshmallows" id="check" v-model="required"> Marshmallows </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="cinnamon" name="cinnamon" id="check" v-model="required"> Cinnamon </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="peanutButter" name="peanut+butter" id="check" v-model="required"> Peanut Butter </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="fruit" name="fruit" id="check" v-model="required"> Fruit </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="nutella" name="Nutella" id="check" v-model="required"> Nutella </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="pumpkin" name="pumpkin" id="check" v-model="required"> Pumpkin </label>
            </li>
          </ul>
        </div>
        <div id="must-avoid" class="hiddenOptForm">
          <h4>Must Avoid</h4>
          <ul>
            <li>
              <label>
                <input type="checkbox" value="gluten" name="Gluten-Free" id="393" v-model="avoid"> Gluten </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="eggs" name="Egg-Free" id="397" v-model="avoid"> Eggs </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="Dairy" name="Dairy-Free" id="396" v-model="avoid"> Dairy </label>
            </li>
            <li>
              <label>
                <input type="checkbox" value="peanuts" name="Peanut-Free" id="394" v-model="avoid"> Peanuts </label>
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
      showOptions: false
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
</style>
