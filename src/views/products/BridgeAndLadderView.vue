<template>
  <h2>Bridges</h2>
  <p>
    Going up or across? We've got you covered here at Metre Tonne. We specialise in providing
    high-quality bridges and ladders to enhance the fun and safety of playgrounds. Our durable and
    versatile products are perfect for schools, parks and recreation areas. Whether you're looking
    to connect play structures with bridges or add height and adventure with ladders, we can provide
    the perfect solution to your playground needs.
  </p>
  <p>
    Both our ladders and bridges are available to order in whatever length you require. Simply
    select the length of your bridge or ladder in metres, add it to the cart and we'll do the rest.
  </p>
  <product-component :key="ladderProduct.sku" :product="ladderProduct">
    <ladder-parameters :product="ladderProduct" />
  </product-component>
  <product-component :key="bridgeProduct.sku" :product="bridgeProduct">
    <bridge-parameters :product="bridgeProduct" />
  </product-component>
</template>

<script setup lang="ts">
import BridgeParameters from '@/components/BridgeParameters.vue';
import LadderParameters from '@/components/LadderParameters.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import { type Product } from '@/types';

const ladderProduct: Product = {
  sku: 'LADDER',
  title: 'Metal safety ladder',
  description:
    'Made from high-quality, rust-resistant metal with non-slip steps and twin handrails.',
  saleUnit: 'Ladder length (metre)',
  unitPrice: 2400,
  image: '/playground-supplies/images/image4.jpg',
};

const bridgeProduct: Product = {
  sku: 'BRIDGE',
  title: 'Wooden bridge',
  description: 'Suspension bridge with wooden slats. Supports up to 300kg.',
  saleUnit: 'Bridge length (metre)',
  unitPrice: 3200,
  image: '/playground-supplies/images/image1.jpg',
};
</script>
