<template>
  <section>
    <div class="wrapper">
      <div class="posts">
        <div class="posts__filter-wrapper">
          <img src="/search.png" class="posts__filter-image" alt="Search">
          <input v-model="searchInput" class="posts__filter" type="text">
        </div>
        <div class="posts__items">
          <template v-if="!!postsFilter()">
            <ThePost
                v-for="{ userId, id, title, body, author } in postsFilter()"
                :key="id"
                :user-id="userId"
                :id="id"
                :title="title"
                :body="body"
                :author="author"
            />
          </template>
          <template v-else>  <!-- For some reason it doesn't work -->
            <div class="empty">Not found!</div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { public: { api: api } } = useRuntimeConfig()

const { data: resPosts } = await useFetch(`${api}/posts/`)
const { data: resUsers } = await useFetch(`${api}/users/`)

let arr = []

for (const [key, value] of resPosts.value.entries()) {
  arr[key] = value
  arr[key].author = resUsers.value.find(i => i.id === value.userId).name
}

const posts = ref(arr)

const searchInput = ref('')

function postsFilter() {
  return posts.value.filter(post => {
    return post.title.toLowerCase().includes(searchInput.value.toLowerCase())
  })
}

// const postsFilter = computed(() => {
//   return posts.value.filter(post => {
//     console.log(post.title.toLowerCase().includes(searchInput.value.toLowerCase()))
//     return post.title.toLowerCase().includes(searchInput.value.toLowerCase())
//   })
// })

</script>

<style lang="sass" scoped>
.posts

  &__filter-wrapper
    height: 35px
    display: flex
    align-items: center
    justify-content: center

  &__filter-image
    height: 100%
    padding: 3px
    border-top: 1px solid #F1F1F1
    border-bottom: 1px solid #F1F1F1
    border-left: 1px solid #F1F1F1
    border-right: none
    background: #F0F6FE
    border-top-left-radius: 8px
    border-bottom-left-radius: 8px

  &__filter
    height: 100%
    width: 100%
    max-width: 300px
    background: #F0F6FE
    border: 1px solid #F1F1F1
    border-top-right-radius: 8px
    border-bottom-right-radius: 8px

    &:active,
    &:focus,
    &:focus-visible
      outline: none

  &__items
    display: grid
    gap: 30px
    grid: repeat(auto-fill, minmax(200px, 1fr)) / repeat(3, minmax(300px, 500px))
    padding: 50px 0

</style>