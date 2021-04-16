import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/class_detali',
    name: 'class_detali',
    component: ()=>import('../components/class_detali.vue')
  },
  {
    path: '/player_class',
    name: 'player_class',
    component: ()=>import('../components/player_class.vue')
  },
  {
    path: '/myself',
    name: 'myself',
    component: ()=>import('../components/myself.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
