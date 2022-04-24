import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: () =>
            import ( /* webpackChunkName: "landingpage" */ '@/views/LandingPage')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/views/Login')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () =>
            import ( /* webpackChunkName: "signup" */ '@/views/SignUp')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "signup" */ '@/views/Dashboard')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router