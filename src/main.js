import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import cookieconsent from 'vue-cookieconsent-component';

import '@/scss/main.scss';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faEnvelope, faCirclePlay, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import landing from './pages/landing.vue';

library.add(faLinkedin);
library.add(faEnvelope);
library.add(faCirclePlay);
library.add(faBolt);

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

app.use(router);

app.mount('#app');
