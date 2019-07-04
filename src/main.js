import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import Articles from './components/ArticlesList.vue'
import Post from './components/Article.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {path: '*', component: Articles},
    {path: '/post/:id', name:'post', component: Post}
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
