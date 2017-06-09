import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Tips from '../components/Tips.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tipsandtricks',
      name: 'Tips',
      component: Tips
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
