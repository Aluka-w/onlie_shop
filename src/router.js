import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/App",
      name: "App",
      component: () => import(/* webpackChunkName: "about" */ "./App.vue"),
      children: [
        {
          path: "/Home",
          name: "Home",
          component: () => import(/* webpackChunkName: "about" */ "./views/Home/Home.vue"),
        },
        {
          path: "/Message",
          name: "Message",
          component: () => import(/* webpackChunkName: "about" */ "./views/Message/Message.vue"),
        },
        {
          path: "/Mine",
          name: "Mine",
          component: () => import(/* webpackChunkName: "about" */ "./views/Mine/Mine.vue"),
        },
      ]
    }
  ]
});
