<template>
        <!-- 登录页面 -->
        <div id="login-panel">
            <el-card id="login-main">
                <div class="title">
                    <h2>登录界面</h2>
                </div>
                <br>
                <el-form ref="user" :model="user" label-position="top">
                    <el-form-item label="用户名:">
                        <el-input type="text" @input="change($event)" v-model="user.username" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="密码:">
                        <el-input type="password" @input="change($event)" v-model="user.password" placeholder="" show-password></el-input>
                    </el-form-item>
                </el-form>

                <div class="login-btn">
                    <el-button>登录</el-button>
                    &emsp;
                    <el-link href="#" @click="toRegister">注册</el-link>
                </div>
            </el-card>
        </div>
</template>


<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

let user = reactive({
    username: "",
    password: ""
});

function toRegister(){
    router.push("/register");
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
