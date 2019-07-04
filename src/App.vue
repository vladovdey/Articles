<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>articles</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <ArticlesList :posts="posts"/>
      </v-container>
      
    </v-content>
  </v-app>
</template>

<script>
import ArticlesList from './components/ArticlesList.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    ArticlesList
  },
  data () {
    return {
      posts:[]
    }
  },
  created: function(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => this.posts = res.data)
    .catch(err => console.log(err))
  }
}
</script>
