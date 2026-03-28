<template>
  <header class="sticky top-0 z-10 border-b border-notion-border bg-notion-panel/95 backdrop-blur">
    <div class="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
      <p class="text-sm text-notion-muted">Production-oriented Nuxt MVP</p>
      <div class="flex items-center gap-2">
        <UiButton variant="ghost" @click="openHelp = true">Quick Start</UiButton>
      </div>
    </div>

    <UiModal :open="openHelp" title="MVP scope" @close="openHelp = false">
      <p class="text-sm text-notion-muted">
        This stage focuses on project scaffolding, page structure, and reusable UI foundations.
      </p>
    </UiModal>
  </header>
</template>

<script setup lang="ts">
const openHelp = ref(false)
</script>
