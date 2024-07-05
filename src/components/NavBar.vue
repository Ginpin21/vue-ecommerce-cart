<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { PhShoppingCart } from '@phosphor-icons/vue'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
<script lang="ts">
export default {
  data() {
    return {
      navLinks: [
        {
          name: 'PRODUCTS',
          path: '/'
        },
        {
          name: 'CHECKOUT',
          path: '/checkout'
        }
      ]
    }
  }
}
</script>
<template>
  <header
    class="sticky top-0 bg-slate-900 flex items-center justify-between gap-5 p-5 text-base font-medium w-full h-20"
  >
    <div class="h-full"></div>
    <nav class="flex gap-10 items-center">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        class="text-white hover:text-gray-300 tracking-[0.15em]"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
    <button class="text-white" @click="cart.toggleCart()">
      <PhShoppingCart size="24" weight="duotone" />
    </button>
  </header>
</template>
<style scoped>
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
