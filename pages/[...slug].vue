<script setup lang="ts">
const { isPreview, path } = usePreview()

  const {data} = await useFetch('/api/content', {
    params: {
      path,
      isPreview,
    }
  })
</script>

<template>
  <div>
    <h1>{{ data.properties?.pageTitle ?? data.name }}</h1>
    <PeopleList v-if="data?.contentType == 'people'" />
  </div>
</template>

<style scoped></style>
