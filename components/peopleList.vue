<script setup lang="ts">
const { path } = useRoute()

const { data, error } = await useFetch('/api/children', {
  method: 'GET',
  params: {
    path,
    contentType: 'person'
  }
})
</script>

<template>
  <div>
    <ul>
      <template v-for="person in data" :key="person.name">
        <li>
          <NuxtLink :to="person.route.path">
            {{ person.name }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
