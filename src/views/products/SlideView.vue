<template>
  <h2>Slides</h2>
  <p>
    Are you looking to add some excitement and safety to your playground? Look no further! Our
    custom slides are the perfect addition to any playground, providing endless hours of fun for
    children of all ages.
  </p>
  <p>
    At Metre Tonne, our slides are expertly designed and crafted to meet the highest safety
    standards, ensuring that children can play with peace of mind. Plus, we offer a wide variety of
    customisable options, so you can create a slide that perfectly fits your playground's theme and
    layout.
  </p>
  <p>
    Don't settle for generic slides - elevate your playground with Metre Tonne's custom slides
    today!
  </p>
  <product-component :product="product">
    <slide-parameters :product="product" />
  </product-component>
</template>

<script setup lang="ts">
import ProductComponent from '@/components/ProductComponent.vue';
import SlideParameters from '@/components/SlideParameters.vue';
import { type Product } from '@/types';

const product: Product = {
  sku: 'SLIDE_CUSTOM',
  title: 'Slide',
  description:
    'Custom slide with safety rails. Manufactured in high-strength plastic.<br><br>Our slide packages contain all you need - you do not require any additional hardware.',
  saleUnit: 'CUSTOM',
  unitPrice: 0,
  image: '/images/image5.jpg',
};
</script>
