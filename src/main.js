import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import weui from 'weui.js'
import Mint from 'mint-ui';
import 'weui';
import'mint-ui/lib/style.css';
import './assets/iconfont/iconfont.css';
// import 'lib-flexible';

Vue.use(Mint);

import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

Vue.config.productionTip = false;

Vue.prototype.$weui = weui
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
