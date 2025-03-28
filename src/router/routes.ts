import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/pages/Auth.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/error/ErrorNotFound.vue'),
    },
];

export default routes;
