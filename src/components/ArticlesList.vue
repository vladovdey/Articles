<template>
  <div>
    <div class="post" :key="post.id" v-for="(post,index) in posts">
        <h3>{{post.title}}</h3>
        <img :src="'https://picsum.photos/200/300?random='.index">
        <router-link :to="{name:'post',params:{id:index}}">Открыть </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import posts from '../posts'


export default {
  name: "ArticlesList",
  data() {
    return {
      posts: posts
    };
  },
};
</script>

<style scoped>
.post{
    border: 1px solid black;
    margin: 10px 0px;
    padding: 10px 10px;
    width: 200px;
}

.post h3{
    padding-bottom: 10px;
}


</style>
