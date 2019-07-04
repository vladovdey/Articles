<template>
  <v-container fluid>
    <v-card class="post" :key="post.id" v-for="(post,index) in paginatedData">
      <v-img
          :src="'https://picsum.photos/id/'+post.id+'/1000/800'"
          aspect-ratio="2.75"
        ></v-img>

      <v-card-title primary-title>
        <h3>{{post.title}}</h3>
      </v-card-title>
      
      <v-card-actions>
        <!-- <router-link :to="{name:'post',params:{id:index}}"> -->
          <v-btn :to="{name:'post',params:{id:index}}" flat color="blue">Подробнее</v-btn>
          <!-- </router-link> -->
      </v-card-actions>
    </v-card>
    <v-btn v-if="(pageNumber)> 0" @click="prevPage">Предыдущая</v-btn><span class="page">{{pageNumber+1}} страница</span><v-btn v-if="(pageNumber+1) < pages" @click="nextPage">Следующая</v-btn>
  </v-container>
</template>

<script>
import posts from "../posts";

export default {
  name: "ArticlesList",
  data() {
    return {
      pageNumber: 0,
      posts: posts,
      size: 10,
      pages: 0
    };
  },
  methods: {
    prevPage() {
        this.pageNumber--;
    },
    nextPage() {
        this.pageNumber++;
      }
  },
  created: function(){
    this.pages = Math.ceil(this.posts.length / this.size);
  },
  computed: {
    paginatedData(){
    const start = this.pageNumber * this.size,
          end = start + this.size;
    return this.posts.slice(start, end);
    }
  }
};
</script>

<style scoped>
 .post {
  text-transform: uppercase;
  margin: 10px 0px;
  padding: 10px 10px;
}

.page{
  font-size: 20px;
  padding: 0px 10px;
}
</style>
