import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import PanelLayout from '../layouts/PanelLayout.vue'
import PanelAbout from '../views/PanelAbout.vue'
import PanelHome from '../views/PanelHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: "/login" },
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path:'/panel',
      name: 'panel',
      meta: {
        breadCrumb: 'پنل کاربری'
      },
      redirect: {path: '/panel/home'},
      component:
      () => {
        if (sessionStorage.getItem('userPassword') === sessionStorage.getItem('filledPassword')) return PanelLayout
        else router.push('/login')
      }
      ,
      children: [
        {
          path: '/panel/home',
          name: 'home',
          meta: {
            breadCrumb: 'خانه'
          },
          component: PanelHome,
        },
        {
          path: '/panel/about',
          name: 'about',
          meta: {
            breadCrumb: 'درباره ی ما'
          },
          component: PanelAbout,
        }
      ]
    },
  ]
})

export default router
