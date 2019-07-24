<template>
  <div>
    <h1>{{ post[0]["title"] }}</h1>
    <div class="fv">
      <img :src="post[0]['fv']" width="100%">
    </div>
    <div class="content" v-html="post[0]['content']" />
  </div>
</template>

<script>
import posts from '~/contents/posts/json/index.json'

export default {
  data() {
    return {
      posts: posts
    }
  },
  computed: {
    post() {
      return this.posts.filter((item, index) => {
        if (item.slug === this.$route.params.slug) return true
      })
    }
  }
}
</script>

<style scoped></style>
