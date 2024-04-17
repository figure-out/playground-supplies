<template>
  <div class="add-to-cart">
    <input
      v-model="quantityToAdd"
      type="number"
      min="1"
      step="1"
      class="add-to-cart__number-input"
    />
    <button @click="handleAddClick" type="button" class="add-to-cart__button">
      <img src="/icons/plus-round-icon.svg" alt="Add to cart" class="add-to-cart__icon" />
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import { type Product } from '@/types';

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const cartStore = useCartStore();
const toast = useToast();

const quantityToAdd = ref(1);

const handleAddClick = () => {
  const item = {
    ...props.product,
    quantity: quantityToAdd.value,
  };
  cartStore.addItem(item);
  toast.default(`${item.title} added to cart`);
};
</script>

<style scoped>
.add-to-cart {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.add-to-cart__button {
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
}

.add-to-cart__icon {
  height: 100%;
}

.add-to-cart__number-input {
  width: 3rem;
  border: 1px solid var(--color-secondary);
  padding: 0.25rem;
  text-align: right;
  border-radius: 0.25rem;
}
</style>
