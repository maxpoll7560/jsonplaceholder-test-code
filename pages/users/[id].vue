<template>
  <section>
    <div class="wrapper">
      <div class="back">
        <button @click="goBackPage()" class="back__button">Return</button>
      </div>
      <div class="user">
        <div class="user__title">{{ user.name }}</div>
        <div class="user__text"><b>&#9993;</b> {{ user.email }}</div>
        <div class="user__text"><b>&#128379;</b> {{ user.phone }}</div>
        <div class="user__text"><b>Address:</b> {{ addressToString(user.address) }}</div>
        <div class="user__text"><b>Site:</b> <a :href="addHttp(user.website)" target="_blank">{{ user.website }}</a> </div>
        <div class="user__text"><b>Company:</b> {{ user.company?.name }} ({{ user.company?.catchPhrase }})</div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { public: { api: api } } = useRuntimeConfig()
  const { params: { id: id } } = useRoute()

  const { data: resUser } = await useFetch(`${api}/users/${id}`)
  const user = ref(resUser)

  useHead({
    title: user.value.name,
    meta: [
      {
        name: 'description',
        content: '%s - JSONPlaceholder'
      }
    ]
  })

  function addHttp(url) {
    return `http://${url}/`
  }

  function addressToString(address) {
    return `${address.zipcode}, ${address.city}, ${address.street}, ${address.suite}`
  }

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

.user
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

    &::first-letter
      text-transform: uppercase

  &__text
    margin: 5px
    color: #333

  b
    color: #444
    font-weight: 700

</style>