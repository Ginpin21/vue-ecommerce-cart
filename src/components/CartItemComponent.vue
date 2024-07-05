<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { PhTrash, PhPlusCircle, PhMinusCircle } from '@phosphor-icons/vue'
const cart = useCartStore()
</script>
<script lang="ts">
import { type PropType } from 'vue'
import { type cartItem } from '@/stores/cart'
export default {
  props: {
    item: {
      type: Object as PropType<cartItem>,
      required: true
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 border-2 border-slate-400 p-2 rounded-md">
    <div class="flex gap-5 items-center">
      <div class="h-full w-32">
        <img :src="item.image" alt="image" class="h-full w-full object-contain" />
      </div>
      <div class="flex flex-col gap-2 justify-between w-full text-lg">
        <h1 class="text-lg">{{ item.name }}</h1>
        <p>
          AED <b>{{ item.price }}</b>
        </p>
      </div>
      <button @click="cart.removeFromCart(item.id)"><PhTrash size="24" /></button>
    </div>
    <hr />
    <div class="flex justify-between items-center">
      <button @click="cart.addToCart(item)">
        <PhPlusCircle size="24" weight="duotone" />
      </button>
      <p>
        <b>{{ item.qty }}</b> Quantity(s)
      </p>
      <button @click="cart.derementQty(item)">
        <PhMinusCircle size="24" weight="duotone" />
      </button>
    </div>
    <div>Sub Total: {{ item.qty * item.price }}</div>
  </div>
</template>
