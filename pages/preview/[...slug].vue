<script setup lang="ts">
  const { path } = useRoute()

  const {data} = await useFetch('/api/content', {
    params: {
      path: path.replace('/preview', '')
    }
  })
</script>

<template>
  <div>
    <h1>{{ data.properties?.pageTitle ?? data.name }}</h1>
    <PeopleList v-if="data?.contentType == 'people'" />
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
