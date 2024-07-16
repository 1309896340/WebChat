<template>
    <el-card id="main-panel">
        <h2>个人信息</h2>
        <el-form :model="userInfo" label-width="60px">
            <el-form-item label="昵名：" style="width:240px">
                <el-input v-model="userInfo.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
                <el-radio-group v-model="userInfo.sex">
                    <el-radio value="unknown">保密</el-radio>
                    <el-radio value="male">男<el-icon>
                            <Male />
                        </el-icon></el-radio>
                    <el-radio value="female">女<el-icon>
                            <Female />
                        </el-icon></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生日：" style="max-width: 180px">
                <el-date-picker v-model="userInfo.birth" type="date" placeholder="选择日期" />
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input v-model="userInfo.email.prefix" />

            </el-form-item>
            <el-form-item label="QQ：">
                <el-input v-model="userInfo.qq" />
            </el-form-item>
            <el-form-item label="微信：">
                <el-input v-model="userInfo.wechat" />
            </el-form-item>
            <br>
            <el-col style="text-align:right">
                <el-button>保存</el-button>
            </el-col>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

let userInfo = reactive({
    nickname: "",
    email: {
        prefix: "",
        suffix: "@qq.com"
    },
    sex: "null",
    birth: "",
    qq: "",
    wechat: ""
});

onMounted(() => {
    // 在挂载后立即发送axios.get获取用户信息
    axios.defaults.withCredentials = true;
    axios.get("http://127.0.0.1:8080/api/userinfo",{
        withCredentials: true
    }).then(response => {
        // 靠服务器端的session来决定是否正确响应
        /* 
            约定：response.data的格式为
            {
                status: Number     // 具体为什么值需要查看后端的MessageState.java
                data: {            // 当status=1时会返回对应所有信息
                    nickname: 
                    sex:
                    birth:
                    email:
                    qq:
                    wechat:
                }
            }
        */
        if (response.status != 200) {
            console.log(response);
            return;
        }
        console.log(response.data);
        let obj = response.data.data;
        console.log("在UserInfo.vue的onMounted()中请求服务器查询的结果：", obj);
        Object.assign(userInfo, obj);
    }).catch(error=>{
        console.log("axios get报错：",error);
    });

});

</script>

<style scoped>
#main-panel {
    /* background-color: aqua; */

    align-self: center;
    margin: auto;

    width: 420px;
    height: 470px;
    border-radius: 10px;
}

#main-panel h2 {
    text-align: center;
}
</style>
