<template>
  <header class="header">
    <navigation-panel />
    <h1 class="header__site-title">Metre Tonne</h1>
    <cart-component />
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import CartComponent from '@/components/CartComponent.vue';
import NavigationPanel from '@/components/NavigationPanel.vue';
</script>

<style scoped>
.header {
  color: #fff;
  display: flex;
  height: 3rem;
  background-color: var(--color-brand);
  padding: 1rem;
  align-items: center;
  z-index: 2;
}

.header__site-title {
  font-family: 'Seymour One', sans-serif;
  margin: 0;
  flex-grow: 1;
  text-align: center;
}

.content {
  padding: 1rem;
}
</style>
