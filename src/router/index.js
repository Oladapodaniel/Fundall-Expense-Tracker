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
    history: createWebHistory(),
    routes
})

// Route/ Navigation guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    const tokenIsValid = token && token.length > 30 ? true : false;

    if ((to.name === 'LandingPage' || to.name === 'Login' || to.name === 'SignUp') && tokenIsValid) return next("/dashboard")

    if (to.name !== 'LandingPage' && to.name !== 'Login' && to.name !== 'SignUp' && !tokenIsValid) return next("/")
    return next(true)
})

export default router