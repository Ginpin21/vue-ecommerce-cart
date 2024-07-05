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
      <div class="h-full w-10">
        <img :src="item.image" alt="image" class="h-full w-full object-contain" />
      </div>
      <div class="flex flex-col gap-2 justify-between w-full text-lg">
        <h1 class="text-lg">{{ item.name }}</h1>
        <p>
          AED <b>{{ item.price }}</b>
        </p>
      </div>
    </div>
    <hr />
    <div class="flex justify-between items-center">
      <p>
        <b>{{ item.qty }}</b> Quantity(s)
      </p>
    </div>
    <div>
      Sub Total: AED <b>{{ item.qty * item.price }}</b>
    </div>
  </div>
</template>
