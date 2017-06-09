<template>
  <div>
    <div id="results">
      <ul class="list-group">
      </ul>
    </div>
    <div>
      <ul class="list-group" id="moreResultsList">
      </ul>
      <div>
        <div id="moreResultsButton">
          <button class="btn btn-default" value="Search" id="moreButton"> More Results </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#moreButton {
  width: 15%;
  background-color: #7A5DC7;
}

#results {
  border-top: 2px solid black;
  width: 100%;
}

#results li {
  display: inline-block;
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

#results li div {
  padding: 5px;
}

#moreResultsList li {
  display: inline-block;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  background-color: white;
  color: black;
  width: 33%;
  vertical-align: middle;
  height: 100%;
  line-height: 100%;
}

#moreResultsList li div {
  padding: 5px;
  margin: 5px;
}

#moreResultsButton {
  margin: 5px;
  margin-bottom: 10px;
}

#moreResults {
  margin: 10px;
}
</style>
