<template>
  <v-container fluid>
    <div > 
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import posts from '../posts.js'


export default {
  name: 'ArticlesList',
  data() {
    return {
      posts: posts,
      post: null
    }
  },
  created: function() {
    var postId = this.$route.params.id;
    this.post = this.posts[postId]
  }
  
}
</script>

<style scoped>

</style>
