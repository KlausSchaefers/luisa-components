import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views//Home.vue'
import ToggleButton from '../views/ToggleButton.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/toggle_button', component: ToggleButton },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

console.log('Router initialized with routes:', routes)
export default router;