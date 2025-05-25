import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views//Home.vue'
import ToggleButtonView from '../views/ToggleButtonView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/toggle_button', component: ToggleButtonView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router;