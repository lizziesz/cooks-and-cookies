<template>
  <div class="row row-eq-height" id="heading">
    <div class="col-xs-3">
      <img src="../assets/cookie.jpg" class="img-responsive" alt="I Heart Cookie" id="logoImg">
    </div>
    <header class="col-xs-7" id="header">
      <div id="text">
        <h1>Cooks & Cookies</h1>
        <h2><small>Your one stop shop for dessert recipes.</small></h2>
      </div>
    </header>
    <div class="col-xs-2" id="nav">
      <ul class="nav nav-pils nav-stacked list-group-items clearfix">
        <li id="home"> <router-link to="/"><h5>Home</h5></router-link></li>
        <li id="about"> <router-link to="/about"><h5>About</h5></router-link></li>
        <li id="tips"> <router-link to="/tipsandtricks"><h5>Tips and Tricks</h5></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
@import url('http://fonts.googleapis.com/css?family=Cookie');

.row-eq-height {
  display: flex;
}

#logo {
  background-color: black;
  padding: 0px !important;
}

#logoImg {
  min-width: 100%;
  margin-bottom: 0px !important;
  position: absolute;
}

header {
  background-color: #F84F3E;
  width: 100%;
}

h1 {
  font-size: 8em;
  font-family: 'Cookie';
}

#nav {
  padding: 0px !important;
  background-color: purple;
  margin-bottom: 0px !important;
}

#home {
  background-color: #3A7891;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  color: black;
  padding: 10px;
  font-size: 15px;
  text-align: center;
}

#home a {
  color: black;
}

#about {
  background-color: #3A7891;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  color: black;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

#tips {
  background-color: #3A7891;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  color: black;
  text-align: center;
  padding: 10px;
  font-size: 15px;
}

#text small {
  color: white;
}
</style>
