import Vue from 'vue'
import DemoApp from './DemoApp.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './main.css'
import axios from 'axios';
import http from '../http';

// import  VueResource  from 'vue-resource'
 
// Vue.use(VueResource);


Vue.prototype.$axios = axios; 
Vue.use(ElementUI);
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  render: h => h(DemoApp)
}).$mount(
  document.body.appendChild(document.createElement('div'))
)
