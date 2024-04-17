<template>
  <button @click="handleTogglePreview" type="button" class="cart__button">
    <img src="/icons/cart-line-icon.svg" alt="Cart" class="cart__icon" />
    <span class="cart__quantity">
      {{ cartStore.cartQuantity }}
    </span>
  </button>
  <Transition name="slide-fade">
    <div v-if="showPreview" class="cart__preview">
      <h3>In your cart:</h3>
      <div v-for="item in cartStore.cart" :key="item.sku" class="cart__items">
        <img :src="item.image" alt="" class="cart__item_image" />
        <span>{{ item.title }}</span>
        <span>{{ item.quantity }}</span>
        <button @click="handleRemoveClick(item.sku)" type="button" class="cart__remove-button">
          <img src="/icons/close-round-icon.svg" alt="Remove" class="cart__remove-button-icon" />
        </button>
      </div>
      <div v-if="cartStore.cartQuantity === 0">Cart is empty</div>
      <div v-else>
        <router-link to="/checkout" @click="handleTogglePreview" class="cart__checkout-link"
          >Checkout</router-link
        >
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const toast = useToast();

const showPreview = ref(false);

const handleTogglePreview = () => {
  showPreview.value = !showPreview.value;
};

const handleRemoveClick = (sku: string) => {
  cartStore.removeItem(sku);
  toast.default('Item removed');
};
</script>

<style scoped>
.cart__button {
  height: 1.5rem;
  background: none;
  border: none;
  display: flex;
  gap: 0.25rem;

  &:hover {
    backdrop-filter: brightness(75%);
    cursor: pointer;
  }
}

.cart__icon {
  height: 100%;
}

.cart__quantity {
  display: block;
  background-color: var(--color-secondary);
  width: 1rem;
  border-radius: 50%;
}

.cart__preview {
  box-sizing: border-box;
  color: var(--color-text);
  position: absolute;
  right: 0rem;
  top: 5rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--color-light);
  border: 1px solid var(--color-secondary);
  height: fit-content;
  z-index: 1;

  @media screen and (min-width: 480px) {
    width: 20rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}

.cart__checkout-link {
  display: block;
  margin-top: 1rem;
  width: 100%;
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  padding: 0.25rem;
  text-decoration: none;
  text-align: center;
  border-radius: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
}

.cart__items {
  display: grid;
  grid-template-columns: 2rem 1fr 1rem 1rem;
  column-gap: 0.5rem;
  row-gap: 2rem;
  align-items: center;
}

.cart__item_image {
  width: 100%;
  aspect-ratio: 1;
}

.cart__remove-button {
  background: none;
  border: none;
}

.cart__remove-button-icon {
  height: 1rem;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50rem);
}
</style>
