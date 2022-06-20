import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../home/index.vue') },
    // { path: '/login', component: () => import('../views/login/index.vue') },
    // { path: '/:pathMatch(.*)', redirect: '/404' },
    // { path: '/404', component: () => import('../views/404/index.vue') },
    // { path: '/father', component: () => import('../views/father/index.vue') },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router
