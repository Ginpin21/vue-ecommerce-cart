<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import CartComponent from '@/components/CartComponent.vue'
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <NavBar />
    <RouterView />
    <CartComponent />
  </main>
</template>
