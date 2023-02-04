import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueParticles from 'vue-particles'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueParticles)

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})
new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
