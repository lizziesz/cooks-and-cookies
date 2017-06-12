<template>
  <div class="row row-eq-height" id="heading">
    <div class="col-xs-3" id="logo">
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
        <li class="home" v-bind:class="{ active: activePage === 'home' }"><router-link to="/"><h5>Home</h5></router-link></li>
        <li class="about" v-bind:class="{ active: activePage === 'about' }"><router-link to="/about"><h5>About</h5></router-link></li>
        <li class="tips" v-bind:class="{ active: activePage === 'tipsandtricks' }"><router-link to="/tipsandtricks"><h5>Tips and Tricks</h5></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activePage: 'home'
    };
  },
  created () {
    if (this.$route.path === '/about') {
      this.activePage = 'about';
    } else if (this.$route.path === '/tipsandtricks') {
      this.activePage = 'tipsandtricks';
    }
  },
  watch: {
    '$route': function () {
      if (this.$route.path === '/') {
        this.activePage = 'home';
      } else if (this.$route.path === '/about') {
        this.activePage = 'about';
      } else if (this.$route.path === '/tipsandtricks') {
        this.activePage = 'tipsandtricks';
      }
    }
  }
}
</script>

<style lang="css">
@import url('http://fonts.googleapis.com/css?family=Cookie');

.row-eq-height {
  display: flex;
}

#heading {
  margin: 0;
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

.home {
  background-color: #3A7891;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  color: black;
  padding: 10px;
  font-size: 15px;
  text-align: center;
}

.home a {
  color: black;
}

.about {
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

.tips {
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

.active {
  background-color: #1491C4;
}

@media(max-width: 2000px) {
  #heading {
    max-height: 15em;
    overflow: hidden;
  }
  .home {
    max-height: 5em;
    width: 100%;
  }
  .about {
    max-height: 5em;
    width: 100%;
  }
  .tips {
    min-height: 15em;
    width: 100%;
  }
  .nav {
    min-height: 15em;
  }
  #logo {
    min-height: 15em;
  }
  #logoImg {
    min-height: 15em;
  }
}

@media(max-width: 1034px) {
  #text {
    font-size: 0.75em;
  }
}

@media(max-width: 788px) {
  #logo {
    display: none;
    max-width: 0%;
  }
  #header {
    min-width: 80%;
  }
  #nav {
    min-width: 20%;
  }
}

@media(max-width: 592px) {
  #text h2 {
    display: none;
  }
  #text h1 {
    font-size: 7em;
    margin-left: 20px;
  }
}

@media(max-width: 500px) {
  .home {
    padding: 5px;
    min-height: 5em;
  }
  .about {
    padding: 5px;
    min-height: 5em;
  }
  .tips {
    padding: 5px;
    min-height: 5em;
  }
  #text h1 {
    font-size: 6em;
  }
  .row {
    min-width: 100%;
  }
}

@media(max-width: 460px) {
  .home {
    padding: 2px;
  }
  .about {
    padding: 2px;
  }
  .tips {
    padding: 2px;
  }
}

@media(max-width: 375px) {
  .tips {
    padding-top: 1px;
  }
}

@media(max-width: 333px) {
  .tips h5 {
    margin-top: 1px;
  }
}
</style>
