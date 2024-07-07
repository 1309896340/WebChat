<template>
    <!-- 登录页面 -->
    <div id="login-panel">
        <el-card id="login-main">
            <div class="title">
                <h2>登录界面</h2>
            </div>
            <br>
            <el-form :model="user" label-width="60px">
                <el-form-item label="用户名:">
                    <el-col :span="22">
                        <el-input type="text" v-model="user.username" placeholder=""></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-col :span="22">
                        <el-input type="password" v-model="user.password" placeholder="" show-password></el-input>
                    </el-col>
                </el-form-item>
            </el-form>

            <div class="login-btn">
                <el-button @click="login">登录</el-button>
                &emsp;
                <el-link href="#" @click="toRegister">注册</el-link>
            </div>
        </el-card>
    </div>
</template>


<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { md5 } from "js-md5";
import axios from "axios";
import { callbackify } from "util";
import { M } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
const router = useRouter();

let user = reactive({
    username: "",
    password: ""
});

function toRegister() {
    router.push("/register");
}

function login() {
    axios.get("127.0.0.1:8080/api/login", {
        params: {
            username: user.username,
            password: md5(user.password)
        }
    }).then(response => {
        // 假设返回的对象格式为
        // {status:"ok", message:"登录成功", isLogin: true}
        // status反映服务器有无出现异常情况，如有异常会将详情记录在message中，在无异常时，isLogin表示登录认证是否通过
        
        console.log(response);
        if (response.status == 200) {
            let obj = JSON.parse(response.data);
            if (obj.status == "ok") {
                // 弹窗提示登录成功
            } else {
                console.log(obj.message);
            }
        }

    }).catch(error => {

    });

}
</script>

<style scoped>
#login-panel {
    /* background-color: burlywood; */
    align-self: center;
    margin: auto;

    width: 400px;
    height: 280px;
    border-radius: 10px;
}

.el-card {
    /* background-color: blanchedalmond; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

#login-main .title {
    text-align: center;
}

.el-container {
    height: 100%;
}


.el-main {
    /* background-color: rgb(137, 224, 244); */
    height: 100%;
    text-align: left;
}


.el-input {
    height: 30px;
}

.login-btn {
    text-align: center;
}

.el-button {
    font-size: 20px;
}



* {
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
