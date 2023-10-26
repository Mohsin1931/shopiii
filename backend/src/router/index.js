import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component : Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        path: '/request-password/token',
        name: 'ResetPassword',
        component: ResetPassword
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
