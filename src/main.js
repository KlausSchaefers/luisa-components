
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/index.css'

console.debug('Initializing Vue application with router:', router)

createApp(App).use(router).mount('#app')
