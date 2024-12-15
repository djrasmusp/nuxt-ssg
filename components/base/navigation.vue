<script setup lang="ts">
  const { isPreview, appendPreviewUrl } = usePreview()
  const {data : navigationItems} = await useFetch('/api/navigation', {
    params: {
      isPreview
    },
  })
</script>

<template>
  <div>
    <ul>
      <template v-for="item in navigationItems" :key="item.id">
      <li>
        <NuxtLink :to="appendPreviewUrl(item.route.path)">
        {{ item.properties.pageTitle }}
        </NuxtLink>
      </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
