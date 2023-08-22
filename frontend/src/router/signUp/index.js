// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)
import HomeView from '@/views/HomeView.vue'
import SignUpPage from '@/views/signUp/SignUpPage'

const signUpRouter = [
    {
        path: '/sign-up-page',
        name: 'SignUpPage',
        component: SignUpPage
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
        },
]

export default signUpRouter