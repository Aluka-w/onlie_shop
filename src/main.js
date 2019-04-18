import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import 'lib-flexible';
import "@a/css/reset.css";
import "@a/css/mediaQuery.css";

Vue.config.productionTip = false;
// 把axios挂载到全局
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
