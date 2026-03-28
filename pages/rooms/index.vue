<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold">Rooms</h1>
    <p class="text-sm text-notion-muted">Lobby listing placeholder. Realtime room discovery will be added later.</p>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <UiCard v-for="room in rooms" :key="room.id">
        <h2 class="font-medium">{{ room.name }}</h2>
        <p class="mb-4 text-sm text-notion-muted">{{ room.players }} players connected</p>
        <NuxtLink :to="`/rooms/${room.id}`">
          <UiButton variant="outline">Open room</UiButton>
        </NuxtLink>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const rooms = [
  { id: 'alpha', name: 'Casual Table A', players: 2 },
  { id: 'beta', name: 'Ranked Practice', players: 4 },
  { id: 'gamma', name: 'Private Invite', players: 1 }
]
</script>
