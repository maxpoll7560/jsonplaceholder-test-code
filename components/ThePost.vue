<template>
  <div class="post">
    <NuxtLink :to="`/posts/${id}`" class="post__title">{{ title }}</NuxtLink>
    <div class="post__body">{{ body }}</div>
    <NuxtLink :to="`/users/${userId}`" class="post__author">{{ author }}</NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps({
    userId: Number,
    id: Number,
    title: String,
    body: String,
    author: String
  })

</script>

<style lang="sass" scoped>
.post
  position: relative
  padding: 20px
  background: #F0F6FE
  border: 1px solid #F1F1F1
  border-radius: 20px

  &__title
    display: block
    font-size: 18px
    font-weight: 700
    color: #444
    
    &::first-letter
      text-transform: uppercase

  &__body
    margin: 15px 0 30px 0
    color: #333

  &__author
    position: absolute
    bottom: 15px
    font-size: 14px
    color: #777

</style>