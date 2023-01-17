import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import cookieconsent from 'vue-cookieconsent-component';

import '@/scss/main.scss';
import 'bootstrap';
import VueGtag from 'vue-gtag';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faSquareFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import landing from './pages/landing.vue';

library.add(faSquareFacebook);
library.add(faSquareInstagram);
library.add(faLinkedin);

const routes = [
  { path: '/', component: landing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('CookieConsent', cookieconsent);
app.use(VueGtag, {
  config: {
    id: 'G-G8WCCP0J1Z',
  },
});

app.use(router);

app.mount('#app');
