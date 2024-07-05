<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import CheckoutItemComponent from '@/components/CheckoutItemComponent.vue'
const cart = useCartStore()
</script>

<template>
  <article class="flex flex-col gap-10 items-center h-full pt-5">
    <h1 class="text-xl">Checkout</h1>
    <template v-if="cart.cartItems.length > 0">
      <section class="flex flex-col justify-between w-full gap-5 px-5">
        <CheckoutItemComponent v-for="item in cart.cartItems" :key="item.id" :item="item" />
      </section>
      <div
        class="flex flex-col gap-2 sticky w-full bottom-0 text-2xl font-semibold bg-slate-900 p-5"
      >
        <p class="text-white">Grand Total : AED {{ cart.getTotal }}</p>
        <button
          class="p-2 w-full bg-white hover:bg-slate-200 text-slate-900 rounded-md font-medium block text-center text-lg"
        >
          Buy {{ cart.getItemCount }} Item(s)
        </button>
      </div>
    </template>
    <p v-else class="text-xl">Cart is empty, nothing to checkout</p>
  </article>
</template>
