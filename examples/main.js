// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSkeleton from '../src'
// import VueSkeleton from '../lib'
import '../lib/index.css';

console.log(VueSkeleton)

Vue.use(VueSkeleton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
