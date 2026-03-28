<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold">Settings</h1>
    <UiCard>
      <label class="mb-2 block text-sm font-medium" for="displayName">Display name</label>
      <UiInput id="displayName" placeholder="Your name" />
      <p class="mt-2 text-xs text-notion-muted">Profile and preferences wiring will come with Supabase auth.</p>
    </UiCard>
  </div>
</template>
