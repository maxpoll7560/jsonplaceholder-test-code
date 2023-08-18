<template>
  <section>
    <div class="wrapper">
      <div class="back">
        <button @click="goBackPage()" class="back__button">Return</button>
      </div>
      <div class="post">
        <div class="post__title">{{ post.title }}</div>
        <div class="post__body">{{ post.body }}</div>
        <NuxtLink :to="`/users/${post.userId}`" class="post__author">{{ post.author }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { public: { api: api } } = useRuntimeConfig()

  const { params: { id: id } } = useRoute()

  const { data: resPosts } = await useFetch(`${api}/posts/${id}`)
  const { data: resUsers } = await useFetch(`${api}/users/`)

  const post = ref(resPosts)
  post.value.author =  resUsers.value.find(i => i.id === post.value.userId).name
  post.value.title = post.value.title.charAt(0).toUpperCase() + post.value.title.slice(1)

  useHead({
    title: post.value.title,
    meta: [
      {
        name: 'description',
        content: '%s - JSONPlaceholder'
      }
    ]
  })

  function goBackPage() {
    const router = useRouter()
    router.go(-1)
  }


</script>

<style lang="sass" scoped>
.back
  padding: 50px

  &__button
    padding: 8px 25px
    font-size: 12px
    font-weight: 700
    color: #555
    border: 1px solid #F0F6FE
    border-radius: 5px
    cursor: pointer

.post
  max-width: 500px
  margin: 0 auto
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

  &__body
    margin: 15px 0 30px 0
    color: #333

  &__author
    position: absolute
    bottom: 15px
    font-size: 14px
    color: #777

</style>