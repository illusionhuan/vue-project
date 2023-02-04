import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
    }
  },
  {
    path: '/register',
    name:'register',
    component: register,
    meta: {
      title: '注册',
    }
  }
]

const router = new VueRouter({
  routes
})


export default router
