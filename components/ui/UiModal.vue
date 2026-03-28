<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-40 bg-black/30" @click="emit('close')" />
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="w-full max-w-md rounded-notion border border-notion-border bg-notion-panel p-5 shadow-notion">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-base font-semibold">{{ title }}</h2>
          <UiButton variant="ghost" @click="emit('close')">Close</UiButton>
        </div>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>
