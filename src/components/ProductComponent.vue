<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
<script lang="ts">
import { type PropType } from 'vue'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 items-center border-2 border-slate-400 p-2 rounded-md">
    <div class="h-64 w-full">
      <img :src="product.image" alt="image" class="h-full w-full object-contain" />
    </div>
    <div class="flex flex-col gap-2 justify-between w-full text-lg">
      <h1 class="text-2xl">{{ product.name }}</h1>
      <p>
        AED <b>{{ product.price }}</b>
      </p>
    </div>
    <button
      class="bg-slate-900 hover:bg-slate-600 text-white p-2 rounded-md w-full"
      @click="cart.addToCart(product)"
    >
      Add To Cart
    </button>
  </div>
</template>
