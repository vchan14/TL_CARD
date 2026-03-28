<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      variantClass
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'ghost' | 'outline'
  }>(),
  {
    variant: 'default'
  }
)

const variantClass = computed(() => {
  if (props.variant === 'ghost') {
    return 'border-transparent bg-transparent hover:bg-zinc-100'
  }

  if (props.variant === 'outline') {
    return 'border-notion-border bg-white text-notion-text hover:bg-zinc-50'
  }

  return 'border-teal-700 bg-teal-700 text-white hover:bg-teal-800'
})
</script>
