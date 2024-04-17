<template>
  <p><b>Please enter your bridge requirements below and click "Add to Cart" when done.</b></p>
  <div
    v-for="[key, parameter] in Object.entries(bridgeParameters)"
    :key="key"
    class="bridge-parameters__inputs"
  >
    <span>{{ parameter.description }}</span>
    <span>{{ formatCurrency(parameter.unitPrice) }} per metre</span>
    <span>
      <input
        v-model.number="parameter.quantity"
        type="number"
        step="any"
        min="0"
        class="bridge-parameters__number-input"
      />
      metres
    </span>
  </div>
  <br />
  <div>Bridge price: {{ formatCurrency(bridgePrice) }}</div>
  <button @click="handleAddClick" type="button" class="bridge-parameters__button">
    <img src="/icons/plus-round-icon.svg" alt="Add to cart" class="bridge-parameters__icon" />
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

const bridgeParameters = ref({
  bridgeHeight: {
    description: 'Bridge length (m)',
    unitPrice: 2400,
    quantity: 0,
  },
});

const bridgePrice = computed(() => {
  return Object.values(bridgeParameters.value).reduce((total, parameter) => {
    console.log(JSON.stringify(parameter));
    return total + parameter.unitPrice * parameter.quantity;
  }, 0);
});

const customSku = computed(() => {
  const flatParams = Object.entries(bridgeParameters.value)
    .map(([key, parameter]) => {
      return `${key}_${parameter.quantity}`;
    })
    .join('_');
  return `BRIDGE_${flatParams};`;
});

const handleAddClick = () => {
  const item = {
    ...props.product,
    sku: customSku.value,
    parameters: bridgeParameters.value,
    quantity: 1,
    unitPrice: bridgePrice.value,
  };
  cartStore.addItem(item);
  toast.default('Bridge added to cart');
};
</script>

<style scoped>
.bridge-parameters__button {
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

.bridge-parameters__icon {
  height: 100%;
}

.bridge-parameters__number-input {
  width: 3rem;
  border: 1px solid var(--color-secondary);
  padding: 0.25rem;
  text-align: right;
  border-radius: 0.25rem;
}

.bridge-parameters__inputs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
