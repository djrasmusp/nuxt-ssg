<script setup lang="ts">
  const {data : navigationItems} = await useFetch('/api/navigation')
</script>

<template>
  <div>
    <ul>
      <template v-for="item in navigationItems" :key="item.id">
      <li>
        <NuxtLink :to="item.route.path">
        {{ item.properties.pageTitle }}
        </NuxtLink>
      </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
