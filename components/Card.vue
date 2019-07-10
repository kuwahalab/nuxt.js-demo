<template>
  <article class="card">
    <nuxt-link class="post-link" :to="{ name: 'posts-slug', params: { slug: slug } }">
    <!-- <nuxt-link :to="{ name: 'posts', params: { slug: slug } }"> -->
      <h2 class="title">
        {{ title }}
      </h2>
    </nuxt-link>
    <div class="tags">
      <span v-for="(tag, i) in tags" :key="i" class="tag">{{ tag }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    publishedDate: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
