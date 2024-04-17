import './assets/main.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'vue-toast-notification/dist/theme-default.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ToastPlugin from 'vue-toast-notification';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(ToastPlugin);

app.mount('#app');
