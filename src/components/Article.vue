<template>
  <v-container fluid>

      <v-flex tag="h1" class="headline">{{post.title}}</v-flex>
      <v-flex>
      <v-img
          :src="'https://picsum.photos/id/'+post.id+'/1000/800'"
          aspect-ratio="2.75"
      ></v-img> </v-flex>
      <v-flex>
        <v-card flat>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-card>
      </v-flex>
    <v-btn href="/">На главную</v-btn>
  </v-container>
</template>



<script>
import axios from "axios";
import posts from "../posts.js";

export default {
  name: "ArticlesList",
  data() {
    return {
      posts: posts,
      post: null
    };
  },
  created: function() {
    var postId = this.$route.params.id;
    this.post = this.posts[postId];
  }
};
</script>

<style scoped>
.headline{
  text-transform: uppercase;
}
</style>
