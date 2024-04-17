<template>
  <p><b>Please enter your slide requirements below and click "Add to Cart" when done.</b></p>
  <div
    v-for="[key, parameter] in Object.entries(slideParameters)"
    :key="key"
    class="slide-parameters__inputs"
  >
    <span>{{ parameter.description }}</span>
    <span>{{ formatCurrency(parameter.unitPrice) }} per metre</span>
    <span>
      <input
        v-model.number="parameter.quantity"
        type="number"
        step="any"
        min="0"
        class="slide-parameters__number-input"
      />
      metres
    </span>
  </div>
  <br />
  <div>Slide price: {{ formatCurrency(slidePrice) }}</div>
  <button @click="handleAddClick" type="button" class="slide-parameters__button">
    <img src="/icons/plus-round-icon.svg" alt="Add to cart" class="slide-parameters__icon" />
    Add to Cart
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import { type Product } from '@/types';
import formatCurrency from '@/utils/formatCurrency';

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const cartStore = useCartStore();
const toast = useToast();

const slideParameters = ref({
  slideHeight: {
    description: 'Height of slide (m)',
    unitPrice: 400,
    quantity: 0,
  },
  slideLength: {
    description: 'Length of slide (m)',
    unitPrice: 2400,
    quantity: 0,
  },
  slideBaseLength: {
    description: 'Length of slide base (m)',
    unitPrice: 700,
    quantity: 0,
  },
  runOutLength: {
    description: 'Length of run out (m)',
    unitPrice: 1400,
    quantity: 0,
  },
});

const slidePrice = computed(() => {
  return Object.values(slideParameters.value).reduce((total, parameter) => {
    return total + parameter.unitPrice * parameter.quantity;
  }, 0);
});

const customSku = computed(() => {
  const flatParams = Object.entries(slideParameters.value)
    .map(([key, parameter]) => {
      return `${key}_${parameter.quantity}`;
    })
    .join('_');
  return `SLIDE_${flatParams};`;
});

const handleAddClick = () => {
  const item = {
    ...props.product,
    sku: customSku.value,
    parameters: JSON.parse(JSON.stringify(slideParameters.value)),
    quantity: 1,
    unitPrice: slidePrice.value,
  };
  cartStore.addItem(item);
  toast.default('Slide added to cart');
};
</script>

<style scoped>
.slide-parameters__button {
  border: none;
  background: var(--color-secondary);
  padding: 0.25rem 0.5rem;
  color: var(--color-text-light);
  border-radius: 0.25rem;
  height: 1.6rem;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
}

.slide-parameters__icon {
  height: 100%;
}

.slide-parameters__number-input {
  width: 3rem;
  border: 1px solid var(--color-secondary);
  padding: 0.25rem;
  text-align: right;
  border-radius: 0.25rem;
}

.slide-parameters__inputs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
