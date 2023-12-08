import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import './plugins/fontawesome'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'

import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// Example import statements in a Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// During page load or navigation
const authToken = localStorage.getItem('token');

// Set the default headers for all Axios requests
axios.defaults.headers.common['authorization'] = authToken;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
