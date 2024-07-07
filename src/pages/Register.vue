<template>
    <div id="top-body">
        <!-- 注册页面 -->
        <div id="login-panel">
            <el-card id="login-main">
                <div class="title">
                    <h2>用户注册</h2>
                </div>
                <br>
                <el-form :model="user" label-width="80px">
                    <el-form-item label="用户名:">
                        <el-col :span="22">
                            <el-input type="text"  v-model="user.username" placeholder="字母开头至少4位的数字、字母组合"
                                @input="checkInput"></el-input>
                        </el-col>
                        &nbsp;
                        <StateSign :ready="status.usernameReady" :status="status.usernameOk"></StateSign>
                    </el-form-item>
                    <el-form-item label="密码:">
                        <el-col :span="22">
                            <el-input type="password" v-model="user.password" placeholder="至少6位的数字、字母、特殊符号组合"
                                @input="checkInput" show-password></el-input>
                        </el-col>
                        &nbsp;
                        <StateSign :ready="status.passwordReady" :status="status.passwordOk"></StateSign>
                    </el-form-item>
                    <el-form-item  label="重复密码:">
                        <el-col :span="22">
                            <el-input type="password"  v-model="user.rePassword" placeholder="重复输入密码" @input="checkInput"
                                show-password></el-input>
                        </el-col>
                        &nbsp;
                        <StateSign :ready="status.rePasswordReady" :status="status.rePasswordOk"></StateSign>
                    </el-form-item>

                </el-form>

                <div class="login-btn">
                    <el-button @click="register">注册</el-button>
                    &emsp;
                    <el-link href="#" @click="toLogin">登录</el-link>
                </div>
            </el-card>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import StateSign from "@/components/StateSign.vue";
import type { ElSelectV2 } from "element-plus/lib/components/index.js";
const router = useRouter();

let user = reactive({
    username: "",
    password: "",
    rePassword: ""
});

let status = reactive({
    usernameReady: false,
    passwordReady: false,
    rePasswordReady: false,
    usernameOk: false,
    passwordOk: false,
    rePasswordOk: false
})


function checkInput() {
    if (status.usernameReady == false && user.username != "") {
        status.usernameReady = true;
    }
    if (status.passwordReady == false && user.password != "") {
        status.passwordReady = true;
    }
    if (status.rePasswordReady == false && user.rePassword != "") {
        status.rePasswordReady = true;
    }
    if (status.usernameReady) {
        let res = user.username.search(/^[a-zA-Z]\w{3,}$/g);
        console.log("username:", res);
        if (res != 0)
        status.usernameOk = false;
        else
        status.usernameOk = true;
    }
    if (status.passwordReady) {
        let res = user.password.search(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/g);
        console.log("password:", res);
        if (res != 0)
        status.passwordOk = false;
        else
        status.passwordOk = true;
    }
    if (status.rePasswordReady) {
        if(user.rePassword==""){
            status.rePasswordOk = false;
        }else if(user.password != user.rePassword){
            status.rePasswordOk = false;
        }else{
            status.rePasswordOk = true;
        }
    }
}

function toLogin() {
    router.push("/login");
}

function register() {
    if (user.password != user.rePassword) {

    }
    console.log(user);
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
