import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './gateway/backendapi'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

axios.interceptors.request.use((config) => {
    if (typeof window === 'undefined') return config;
    const token =  localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


const app = createApp(App)
const options = {}
app.use(router).use(Toast, options).mount('#app')
