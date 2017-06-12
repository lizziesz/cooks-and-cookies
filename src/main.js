// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueEventBus from 'vue-event-bus';
import VueLocalStorage from 'vue-localstorage';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueEventBus);
Vue.use(VueLocalStorage);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
