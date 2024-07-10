<template>
    <!-- 登录页面 -->
    <div id="login-panel">
        <el-card id="login-main">
            <div class="title">
                <h2>用户登录</h2>
            </div>
            <br>
            <el-form :model="user" label-width="80px">
                <el-form-item label="用户名:">
                    <el-col :span="22">
                        <el-input type="text" prefix-icon="User" v-model="user.username" placeholder=""></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-col :span="22">
                        <el-input type="password" prefix-icon="Lock" v-model="user.password" placeholder=""
                            show-password></el-input>
                    </el-col>
                </el-form-item>
            </el-form>

            <div class="login-btn">
                <el-button @click="login">登录</el-button>
                &emsp;
                <!-- <el-link href="#" @click="toRegister">注册</el-link> -->
                <router-link to="/register" class="router-link">注册</router-link>
            </div>
        </el-card>
    </div>
</template>


<script lang="ts" setup>
import { reactive } from "vue";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import { md5 } from "js-md5";
import axios from "axios";
const router = useRouter();
const route = useRoute("login");

let user = reactive({
    username: "",
    password: ""
});

onMounted(() => {
    let username = route.query.username as string;
    user.username = username;
    console.log(route.query);
});

function login() {
    axios.post("http://localhost:8080/api/login", {
        username: user.username,
        password: md5(user.password)
    }).then(response => {
        // 假设返回的对象格式为
        // {status: true, message:"登录成功"}
        // status表示登录认证是否通过，message附带一些描述信息
        console.log(response);
        if (response.status != 200)
            return;

        if (response.data.status != true) {
            ElMessage.error("登录失败，用户名或密码错误！");
            return;
        }
        // 弹窗提示登录成功
        ElMessageBox.alert(
            "登录成功！", "消息",
            {
                confirmButtonText: "确定"
            }
        );
        

    }).catch(error => {
        console.log(error);
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
    /* background: linear-gradient(135deg, cyan, blue); */
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

.router-link {
    text-decoration: none
}



* {
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
