<template>
    <div>
        <div class="post" :key="post.id" v-for="post in posts">
          <a class="title">{{post.title}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'ArticlesList',
    props: ['posts']
}
</script>