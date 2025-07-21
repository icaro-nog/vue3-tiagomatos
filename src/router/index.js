// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your view components
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
// Add more imports for other views as needed

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunckName: about */ '../views/AboutView.vue'),
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios-editar',
    component: () => import('../views/UserEditView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(), // Use web history for standard browser routing
  routes,
});

export default router;