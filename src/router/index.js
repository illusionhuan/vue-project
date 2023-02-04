import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import login2 from '../views/login/login2.vue'  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/login',
    name: 'login2',
    component: login2,
    meta: {
      title: '登录',
    }
  }
]

const router = new VueRouter({
  routes
})


export default router
