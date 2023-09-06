import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import PanelView from '../views/PanelView.vue'
import Sub from '../views/PanelView/Sub.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path:'/panel',
      name: 'panel',
      component: PanelView
    },
    {
      path:'/panel/sub',
      name: 'sub',
      component: Sub
    }
  ]
})

export default router
