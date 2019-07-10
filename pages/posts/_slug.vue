<template>
  <div>
    {{ post }}
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
