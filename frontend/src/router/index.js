import { createRouter, createWebHistory } from 'vue-router'
import signUpRouter from '@/router/signUp'
import logInRouter from '@/router/logIn'

const routes = [
  ...signUpRouter,
  ...logInRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
