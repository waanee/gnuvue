import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../pages/main.vue'
import AboutPage from '../pages/about/index.vue'
import bbsPage from '../pages/bbs/index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    //mode:'history',
    routes: [
      {
        path: "/",
        component: MainPage
      },
      {
        path: "/about",
        component: AboutPage
      },
      {
        path: "/bbs",
        component: bbsPage
      }
    ]
  });