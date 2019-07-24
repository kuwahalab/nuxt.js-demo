<template>
  <div class="container">
    <div>
      <h3>新着</h3>
      <card-list
        class="contents"
        :posts="new_posts"
      />
      <h3>一覧</h3>
      <card-list
        class="contents"
        :posts="posts"
      />
    </div>
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'

import posts from '~/contents/posts/json/index.json'

export default {
  components: {
    CardList
  },
  data() {
    return {
      posts: posts
    }
  },
  computed: {
    new_posts() {
      return this.posts.filter((item, index) => {
        // ここの新着条件は後に決める。
        if (item.publishedDate === '2019-07-24') return true
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 21px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
