import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import LandingPage from './pages/Landing/Landing.vue'
import LoginPage from './pages/Login/Login.vue'
import SignUpPage from './pages/Signup/Signup.vue'
import HomePage from './pages/Home/Home.vue'

// create the possible routes
const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/home', component: HomePage },
]

// create router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// create and mount the Vue application with the router and ElementPlus
const app = createApp(App).use(router).use(ElementPlus)
app.mount('#app')
