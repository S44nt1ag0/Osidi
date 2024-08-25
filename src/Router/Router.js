import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; 
import Noticia from '@/views/Noticia.vue';
import Busca from '@/views/Busca.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/noticia', component: Noticia},
  { path: '/busca', component: Busca}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;