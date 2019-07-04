<template>
  <div>
    <div class="post" :key="post.id" v-for="(post,index) in paginatedData">
      <h3>{{post.title}}</h3>
      <!-- <img :src="'https://picsum.photos/200/300?random='.index" /> -->
      <router-link :to="{name:'post',params:{id:index}}">Открыть</router-link>
    </div>
    <button v-if="(pageNumber)> 0" @click="prevPage">Предыдущая</button><span class="page">{{pageNumber+1}} страница</span><button v-if="(pageNumber+1) < pages" @click="nextPage">Следующая</button>
  </div>
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
  border: 1px solid black;
  margin: 10px 0px;
  padding: 10px 10px;
  width: 200px;
}

.post h3 {
  padding-bottom: 10px;
}

.page{
  font-size: 20px;
  padding: 0px 10px;
}
</style>
