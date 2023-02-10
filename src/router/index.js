import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'
import test from '../views/home/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/test',
    name:'test',
    component: test,
    meta: {
      title: '测试',
    }
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
