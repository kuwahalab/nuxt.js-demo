<template>
  <div class="post-content">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
