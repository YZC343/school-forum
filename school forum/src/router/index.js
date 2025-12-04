import { createRouter, createWebHistory } from 'vue-router'
import Forum from '@/views/Forum.vue'
import Login from '@/views/Login.vue'
import Sign_up from '@/views/Sign_up.vue'
import Home from '@/views/Home.vue'
import Board from '@/views/Board.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Login' 
    },

    {
      path:'/Forum',
      component:Forum
    },
    {
      path:'/Login',
      component:Login
    },
    
    {
      path:'/Sign_up',
      component:Sign_up
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/Board',
      component:Board
    }
  ],
  
})

export default router
