import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(), // ou createWebHistory(import.meta.env.BASE_URL)
    routes,
});

export default router;
