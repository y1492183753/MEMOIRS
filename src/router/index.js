/* eslint-disable no-unused-vars */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Affection from '@/views/Affection.vue'
import Friendship from '@/views/Friendship.vue'
import Love from '@/views/Love.vue'
import Scenery from '@/views/Scenery.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/affection',
    name: 'affection',
    // lazy-router
    component: () => import(/* webpackChunkName: "about" */ '../views/Affection.vue')
  },
  {
    path: '/friendship',
    name: 'friendship',
    // lazy-router
    component: () => import(/* webpackChunkName: "about" */ '../views/Friendship.vue')
  },
  {
    path: '/love',
    name: 'Love',
    // lazy-router
    component: () => import(/* webpackChunkName: "about" */ '../views/Love.vue')
  },
  {
    path: '/scenery',
    name: 'scenery',
    // lazy-router
    component: () => import(/* webpackChunkName: "about" */ '../views/Scenery.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
