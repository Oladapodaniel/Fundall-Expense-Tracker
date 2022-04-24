import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './gateway/backendapi'

axios.interceptors.request.use((config) => {
    if (typeof window === 'undefined') return config;
    const token =  localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


const app = createApp(App)

app.use(router).mount('#app')
