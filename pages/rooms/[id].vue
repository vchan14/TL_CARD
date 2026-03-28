<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold">Room: {{ roomId }}</h1>
    <UiCard>
      <p class="text-sm text-notion-muted">
        Table view placeholder. Player seats, hand cards, and turn timeline will live here.
      </p>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const roomId = computed(() => String(route.params.id || 'unknown'))
</script>
