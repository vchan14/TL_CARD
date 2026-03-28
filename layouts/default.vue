<template>
  <div class="min-h-screen bg-notion-bg text-notion-text">
    <div class="flex min-h-screen">
      <AppSidebar />

      <div class="flex min-w-0 flex-1 flex-col">
        <AppTopbar />
        <main class="flex-1 p-6 md:p-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
