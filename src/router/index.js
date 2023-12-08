import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({ 
  base: '/var/www/html/',
  routes:  [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // enllaç a la subpagina per a que funcioni el menu
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/freetranslator',
      name: 'freetranslator',
      component: () => import('../views/FTranslatorView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
