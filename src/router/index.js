import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import IOSGame from '../components/IOS'
import Index from '../components/Index'
import Player from '../components/Player'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path:'',
        component:Index,
        meta:{title:"首页"}
      },
      {
        path:'game/ios',
        component:IOSGame,
        meta:{title:"游戏管理 / IOS游戏"}
       },
       {
         path:'player',
         component:Player,
         meta:{title:"玩家管理"}
       }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
