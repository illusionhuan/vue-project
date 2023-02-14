import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueParticles from 'vue-particles'
import 'font-awesome/css/font-awesome.min.css'
//引入echarts图表
import * as echarts from 'echarts'
import './mock'

Vue.prototype.$echarts=echarts
// 引入axios
import axios from 'axios'
// 挂载axios
Vue.prototype.$axios = axios
//设置访问根路径
axios.defaults.baseURL = "http://localhost:9000"

import Cookie from 'js-cookie'

Vue.use(VueParticles)

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  // 判断token是否存在
  const token = Cookie.get('token');
  // token不存在,说明当前用户未登录,跳转至登陆页面
  if (!token && to.name !== 'login') {
    next({name:'login'})
  }else if(token && to.name === 'login'){ // token存在,说明当前用户已登录,跳转至首页
    next({name:'home'})
  }else{
    next()
  }
})
new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
