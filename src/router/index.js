import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/page/HomeView.vue'
import PostView from '../components/page/PostView.vue'
import CreatePostVue from '../components/page/CreatePostVue'
import PostItem from '../components/page/PostItem.vue'
// import { Axios } from "axios";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/PostView',
    // name:'PostView',
    component: PostView,
  },

  {
    path:'/PostView/:id',
    name: 'postview',
    compenent: PostItem,
  },

  {
    path:'/CreatePostVue',
    name:'CreatePostVue',
    component: CreatePostVue,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  // }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes,
  linkActiveClass:'active',
})
// Axios.defaults.BASE_URL = 'https://jsonplaceholder.typicode.com';
export default router
