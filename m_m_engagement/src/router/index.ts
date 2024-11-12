import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/Welcome.view.vue'
import UploadView from '@/views/Upload.view.vue'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadView
    }
  ]
})

export default router
