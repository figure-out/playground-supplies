<template>
  <h2>Checkout</h2>
  <div v-if="cartStore.cartQuantity === 0">Your cart is currently empty!</div>
  <div v-else>
    <table>
      <caption :style="{ display: 'none' }">
        Cart contents
      </caption>
      <thead>
        <th></th>
        <th>Product</th>
        <th>Parameters</th>
        <th>Unit price</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in cartStore.cart" :key="item.sku">
          <td><img :src="item.image" alt="" class="checkout__item_image" /></td>
          <td>{{ item.title }}</td>
          <td>
            <div v-for="[key, parameter] in Object.entries(item.parameters || {})" :key="key">
              {{ parameter.description }}: {{ parameter.quantity }}
            </div>
          </td>
          <td>{{ formatCurrency(item.unitPrice) }}</td>
          <td>
            <input
              v-model="item.quantity"
              type="number"
              min="1"
              step="1"
              class="checkout__number-input"
            />
          </td>
          <td>{{ formatCurrency(item.quantity * item.unitPrice) }}</td>
          <td>
            <button
              @click="handleRemoveClick(item.sku)"
              type="button"
              class="checkout__remove-button"
            >
              <img
                src="/icons/close-round-icon.svg"
                alt="Remove"
                class="checkout__remove-button-icon"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="checkout__total">Total: {{ formatCurrency(cartStore.cartTotal) }}</p>
    <p class="checkout__gst-warning">Please note: All prices are inclusive of GST</p>
    <button @click="handleCompleteClick" type="button" class="complete__button">
      Complete Order
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';
import formatCurrency from '@/utils/formatCurrency';

const router = useRouter();
const cartStore = useCartStore();
const toast = useToast();

const handleRemoveClick = (sku: string) => {
  cartStore.removeItem(sku);
  toast.default('Item removed');
};

const handleCompleteClick = () => {
  router.push('/complete');
};
</script>

<style scoped>
th {
  text-align: left;
}

th,
td {
  @media screen and (min-width: 480px) {
    padding: 1rem;
  }
}

.checkout__item_image {
  max-width: 4rem;
  max-height: 4rem;
  width: 100%;
  aspect-ratio: 1;
}

.checkout__number-input {
  width: 3rem;
  border: 1px solid var(--color-secondary);
  padding: 0.25rem;
  text-align: right;
  border-radius: 0.25rem;
}

.checkout__remove-button {
  background: none;
  border: none;
}

.checkout__remove-button-icon {
  height: 1rem;
}

.checkout__total {
  font-size: 2rem;
}

.complete__button {
  display: block;
  margin: 2rem auto 0 auto;
  background-color: var(--color-brand);
  color: var(--color-text-light);
  padding: 0.5rem;
  font-size: 1.5rem;
}

.checkout__gst-warning {
  font-size: 1.5rem;
  color: var(--color-brand);
}
</style>
