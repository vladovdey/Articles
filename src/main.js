import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import VueRouter from 'vue-router'

// import Article from './components/Article'

// Vue.use(VueRouter)

// var router = new VueRouter({
//   routes: [
//     {path: '/article', component: Article}
//   ]
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router: router
}).$mount('#app')
