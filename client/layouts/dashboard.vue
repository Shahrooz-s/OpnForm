<template>
  <div class="dashboard-layout min-h-screen bg-neutral-50">
    <AppSidebar v-if="!isConcordEmbed" />

    <main :class="{ 'sm:pl-58': !isConcordEmbed }">
      <div class="min-h-screen bg-white">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import AppSidebar from "~/components/layouts/AppSidebar.vue"

const isConcordEmbed = useConcordEmbed()
</script>

<style scoped>
.dashboard-layout {
  /* Ensure proper layout structure */
}
</style>
