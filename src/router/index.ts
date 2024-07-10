import {createRouter, createWebHistory} from "vue-router";

import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import UserInfo from "@/pages/UserInfo.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            redirect: "/userInfo"
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/userInfo",
            component: UserInfo
        }
    ]
});

export default router;

