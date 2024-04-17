<template>
  <button type="button" @click="handleNavToggleClick" class="navigation__toggle">
    <img src="/icons/list-round-bullet-icon.svg" class="navigation__icon" alt="" />
    <span class="navigation__icon-text"> Products</span>
  </button>
  <Transition name="slide-fade">
    <nav v-show="isNavVisible" class="navigation__wrapper">
      <RouterLink to="/">
        <div class="navigation__home navigation__item">
          <img src="/icons/home-icon.svg" alt="" class="navigation__home-icon" />
          Home
        </div>
      </RouterLink>
      <ul class="navigation__product-list">
        <RouterLink to="/products/bark"><li class="navigation__item">Bark Chips</li></RouterLink>
        <RouterLink to="/products/slide"><li class="navigation__item">Slides</li></RouterLink>
        <RouterLink to="/products/bridge-and-ladder"
          ><li class="navigation__item">Bridges</li></RouterLink
        >
      </ul>
      <hr />
      <ul class="navigation__product-list">
        <RouterLink to="/checkout"><li class="navigation__item">Checkout</li></RouterLink>
      </ul>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const isNavVisible = ref(false);

const handleNavToggleClick = () => {
  isNavVisible.value = !isNavVisible.value;
};

watch(route, () => (isNavVisible.value = false));
</script>

<style scoped>
a {
  text-decoration: none;
}

.navigation__toggle {
  height: 100%;
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 1.2rem;

  &:hover {
    backdrop-filter: brightness(75%);
    cursor: pointer;
  }
}

.navigation__icon {
  height: 1rem;
  color: var(--color-text-light);
}

.navigation__wrapper {
  position: absolute;
  top: 5rem;
  box-sizing: border-box;
  left: 0;
  height: calc(100vh - 7rem);
  width: 100%;
  background-color: var(--color-light);

  @media screen and (min-width: 480px) {
    width: 20rem;
    border-right: 1px solid var(--color-secondary);
  }
}

.navigation__product-list {
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  flex-direction: column;
}

.navigation__item {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  color: var(--color-brand);
  text-decoration: none;

  &:hover {
    background-color: var(--color-brand);
    color: var(--color-text-light);
    cursor: pointer;
    text-decoration: underline;
  }
}

.navigation__icon-text {
  display: none;

  @media screen and (min-width: 480px) {
    display: inline;
  }
}

.navigation__home {
  background-color: var(--color-secondary);
  color: var(--color-text-light);

  a {
    text-decoration: none;
  }
}

.navigation__home-icon {
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
  transform: translateX(-30rem);
}
</style>
