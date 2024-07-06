import {createRouter, createWebHistory} from "vue-router";

import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        }
    ]
});

export default router;

