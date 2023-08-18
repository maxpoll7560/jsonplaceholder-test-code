<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <NuxtLink to="/" class="header" transition="{ name: 'bounce', mode: 'out-in' }">JSONPlaceholder</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="sass" scoped>
header
  font-weight: 700
  padding: 40px 0
  text-align: center
  font-size: 22px

.header
  color: rgb(55, 65, 81)

</style>