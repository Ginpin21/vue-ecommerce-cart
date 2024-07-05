<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import CartItemComponent from './CartItemComponent.vue'
import { PhX } from '@phosphor-icons/vue'
import { RouterLink } from 'vue-router'
const cart = useCartStore()
</script>
<script lang="ts">
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <aside
    :class="[
      'fixed top-20 h-screen right-0 bg-slate-900/80 backdrop-blur-sm p-5 text-white transition-all duration-200 flex flex-col gap-5',
      cart.isOpen ? 'opacity-100 sm:w-96 w-full' : 'opacity-0 w-0'
    ]"
  >
    <div class="flex justify-between">
      <h2 class="text-xl">My Cart</h2>
      <button class="text-white" @click="cart.toggleCart()"><PhX size="24" /></button>
    </div>
    <template v-if="cart.cartItems.length > 0">
      <div class="overflow-y-scroll overflow-x-hidden h-2/3 flex flex-col gap-2">
        <CartItemComponent :item="item" v-for="item in cart.cartItems" :key="item.id" />
      </div>

      <div>
        <p class="text-lg">
          Grand Total ({{ cart.getItemCount }} items) :<b class="text-xl">
            AED {{ cart.getTotal }}</b
          >
        </p>
        <RouterLink
          to="/checkout"
          class="p-2 w-full bg-white hover:bg-slate-200 text-slate-900 rounded-md font-medium block text-center text-lg"
          @click="cart.toggleCart()"
        >
          Proceed to Checkout
        </RouterLink>
      </div>
    </template>
    <template v-else>
      <div class="overflow-x-hidden h-full flex flex-col gap-2 justify-center items-center text-xl">
        <h3>No items in cart</h3>
        <RouterLink to="/" class="bg-white text-slate-900 rounded-md p-2"
          >Click here to add some</RouterLink
        >
      </div>
    </template>
  </aside>
</template>
