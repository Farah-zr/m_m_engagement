import { createRouter, createWebHistory } from 'vue-router'
import AppView from '@/views/App.view.vue'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView
    }
  ]
})

export default router
