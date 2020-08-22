import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowInfo from "../views/ShowInfo.vue";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/page1.vue')
  },
    {
      path: '/ShowInfo',
      name:'ShowInfo',
      component: ShowInfo
    }
]

const router = new VueRouter({
  routes
})

export default router
