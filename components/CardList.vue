<template>
  <div class="card-list">
    <card
      v-for="post in posts"
      :key="post.id"
      class="card"
      :title="post.title"
      :fv="post.fv"
      :category="post.category"
      :tags="post.tags"
      :created-at="post.createdAt"
      :published-date="post.publishedDate"
      :slug="post.slug"
    />
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
