<template>
  <aside class="hidden w-64 flex-col border-r border-notion-border bg-notion-panel p-4 md:flex">
    <div class="mb-6">
      <p class="text-xs uppercase tracking-wide text-notion-muted">Tiến Lên</p>
      <h1 class="text-lg font-semibold">Game Hub MVP</h1>
    </div>

    <nav class="space-y-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="block rounded-lg px-3 py-2 text-sm transition hover:bg-zinc-100"
        active-class="bg-zinc-100 font-medium"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>

    <div class="mt-auto rounded-notion border border-notion-border p-3 text-xs text-notion-muted">
      Supabase/Auth and realtime logic will be added in later stages.
    </div>
  </aside>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Rules', to: '/rules' },
  { label: 'Settings', to: '/settings' }
]
</script>
