<template>
  <h2>Bark Chips</h2>
  <p>
    Made from high-quality, sustainable wood, our bark chip provides a soft and cushioned surface
    that is perfect for play areas of all sizes. Our bark chip is long-lasting, low-maintenance, and
    easy to install, making it the ideal choice for schools, parks and residential playgrounds.
  </p>

  <p>Keep your little ones safe and happy with our top-of-the-line bark chip today!</p>
  <product-component v-for="product in products" :key="product.sku" :product="product" />
</template>

<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue';
import { type Product } from '@/types';

const products: Array<Product> = [
  {
    sku: 'BARK_BAG_50L',
    title: 'Medium Chip Bark',
    description:
      'Bagged, premium bark chips, made from the finest trees.<br /><br /><i>Sadly we no longer offer multi-buy discounts on this item.</i>',
    saleUnit: '50L bags (number of)',
    unitPrice: 1500,
    image: '/images/image3.jpg',
  },
  {
    sku: 'BARK_SCOOP_1/3M',
    title: 'Loose Bark Chippings',
    description: 'We supply the scoop, you supply the bucket.',
    saleUnit: 'Scoop 1/3M<sup>3</sup>',
    unitPrice: 5000,
    image: '/images/image2.jpg',
  },
];
</script>
