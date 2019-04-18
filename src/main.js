import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import weui from 'weui.js'
import 'weui'
import './assets/iconfont/iconfont.css'
// import 'lib-flexible';
 

Vue.config.productionTip = false;

Vue.prototype.$weui = weui
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
