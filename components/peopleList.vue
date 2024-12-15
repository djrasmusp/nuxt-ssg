<script setup lang="ts">
const { isPreview, pageId, path, appendPreviewUrl } = usePreview()

const { data} = await useFetch('/api/children', {
  method: 'GET',
  params: {
    path: isPreview ? pageId : path,
    contentType: 'person',
    isPreview
  }
})
</script>

<template>
  <div>
    <ul>
      <template v-for="person in data" :key="person.name">
        <li>
          <NuxtLink :to="appendPreviewUrl(person?.route?.path)">
            {{ person?.name }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
