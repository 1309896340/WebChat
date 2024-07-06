<template>
    <div id="top-body">
        <!-- 注册页面 -->
        <div id="login-panel">
            <el-card id="login-main">
                <div class="title">
                    <h2>注册页面</h2>
                </div>
                <br>
                <el-form ref="user" :model="user" label-position="top">
                    <el-form-item label="用户名:">
                        <el-input type="text" @input="change($event)" v-model="user.username" placeholder="至少4位的数字、字母、下划线组合"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:">
                        <el-input type="password" @input="change($event)" v-model="user.password" placeholder="至少6位的数字、字母、特殊符号组合" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" @input="change($event)" v-model="user.rePassword" placeholder="重复输入密码" show-password></el-input>
                    </el-form-item>
                </el-form>

                <div class="login-btn">
                    <el-button>注册</el-button>
                    &emsp;
                    <el-link href="#"  @click="toLogin">登录</el-link>
                </div>
            </el-card>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

let user = reactive({
    username: "",
    password: "",
    rePassword: ""
});

function toLogin(){
    router.push("/login");
}

function change(this: any, event: any){
    this.$forceUpdate();
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

#login-main {
    font-family: 微软雅黑;
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

.el-button{
    font-size: 20px;
}


* {
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
