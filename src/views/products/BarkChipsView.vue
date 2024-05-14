<template>
  <h2>Bark Chips</h2>
  <p>
    Made from high-quality, sustainable wood, our bark chip provides a soft and cushioned surface
    that is perfect for play areas of all sizes. Our bark chip is long-lasting, low-maintenance, and
    easy to install, making it the ideal choice for schools, parks and residential playgrounds.
  </p>

  <p>We also supply wooden surrounds for your bark chip areas made from sustainably sourced Radiata wood.</p>

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
    image: '/playground-supplies/images/image3.jpg',
  },
  {
    sku: 'BARK_SCOOP_1/3M',
    title: 'Loose Bark Chippings',
    description: 'We supply the scoop, you supply the bucket.',
    saleUnit: 'Scoop 1/3M<sup>3</sup>',
    unitPrice: 5000,
    image: '/playground-supplies/images/image2.jpg',
  },
  {
    sku: 'BARK_SURROUND_150_4.8',
    title: 'Radiata wood surround',
    description: 'Width: 150mm, Thickness 50mm, Length: 4.8m',
    saleUnit: 'Each 4.8 metre length',
    unitPrice: 3500,
    image: '/playground-supplies/images/image6.jpg',
  },
  {
    sku: 'BARK_SURROUND_200_6.0',
    title: 'Radiata wood surround XL',
    description: 'Width: 200mm, Thickness 50mm, Length: 6.0m',
    saleUnit: 'Each 6.0 metre length',
    unitPrice: 5000,
    image: '/playground-supplies/images/image7.jpg',
  },
];
</script>
