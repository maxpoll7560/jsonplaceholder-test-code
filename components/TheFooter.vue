<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <NuxtLink to="/" class="logo">JSONPlaceholder</NuxtLink>
      </div>
      <p class="copyright">© JSONPlaceholder, {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="sass" scoped>
footer
  padding: 64px 0
  background: #F0F6FE

.logo
  font-size: 22px
  font-weight: 700
  color: rgb(55, 65, 81)

.copyright
  margin-top: 10px
  font-size: 16px
  font-weight: 400
  line-height: 22px
  letter-spacing: 0
  color: #81899D
</style>