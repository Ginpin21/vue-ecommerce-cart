<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue'
</script>
<script lang="ts">
export default {
  data() {
    return {
      products: [
        {
          id: 101,
          name: 'iPhone 13',
          price: 2099,
          image: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
          id: 102,
          name: 'Samsung Galaxy S21',
          price: 1899,
          image: 'https://m.media-amazon.com/images/I/61O45C5qASL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
          id: 103,
          name: 'Google Pixel 6',
          price: 1799,
          image: 'https://m.media-amazon.com/images/I/61oQtjPpM-L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
        },
        {
          id: 104,
          name: 'OnePlus 9 Pro',
          price: 1999,
          image: 'https://m.media-amazon.com/images/I/611vNIBKd0L._AC_UY327_FMwebp_QL65_.jpg'
        },
        {
          id: 105,
          name: 'Sony Xperia 5 III',
          price: 1599,
          image: 'https://m.media-amazon.com/images/I/61r6pYjE9NL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
        },
        {
          id: 106,
          name: 'Xiaomi Mi 11',
          price: 1499,
          image: 'https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
          id: 107,
          name: 'Oppo Find X3 Pro',
          price: 1699,
          image: 'https://m.media-amazon.com/images/I/61TzzQ0kTaL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
          id: 108,
          name: 'Huawei P40 Pro',
          price: 1399,
          image: 'https://m.media-amazon.com/images/I/61qnRwROBRL._AC_UL480_FMwebp_QL65_.jpg'
        }
      ]
    }
  }
}
</script>
<template>
  <article class="flex flex-col gap-10 items-center h-full py-5">
    <h1 class="text-xl">Products</h1>
    <section
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between w-full gap-5 px-5"
    >
      <ProductComponent v-for="product in products" :key="product.id" :product="product" />
    </section>
  </article>
</template>
