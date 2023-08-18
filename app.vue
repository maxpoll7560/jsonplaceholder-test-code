<template>
  <div class="container">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>
  useHead({
    title: 'Homepage',
    titleTemplate: '%s - JSONPlaceholder',
    meta: [
      {
        name: 'description',
        content: '%s - JSONPlaceholder'
      }
    ]
  })
</script>

<style lang="sass">
@use "assets/styles/reset"

::-webkit-scrollbar
  width: 5px
  background-color: #F0F6FE

  &-thumb
    border-radius: 5px
    background-color: #828282

body
  font-family: system-ui, sans-serif
  font-size: 16px
  line-height: 24px

.container
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between

.wrapper
  width: 100%
  max-width: 1920px
  padding: 0 100px
</style>
