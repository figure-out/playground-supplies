import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import CompleteView from '../views/CompleteView.vue';
import BarkChips from '../views/products/BarkChipsView.vue';
import BridgeAndLadder from '../views/products/BridgeAndLadderView.vue';
import Slide from '../views/products/SlideView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView,
    },
    {
      path: '/products/bark',
      name: 'products-bark',
      component: BarkChips,
    },
    {
      path: '/products/slide',
      name: 'product-slide',
      component: Slide,
    },
    {
      path: '/products/bridge-and-ladder',
      name: 'products-bridge-ladder',
      component: BridgeAndLadder,
    },
  ],
});

export default router;
