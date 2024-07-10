<template>
    <el-card id="main-panel">
        <h2>补全个人信息</h2>
        <el-form :model="userInfo" label-width="60px">
            <el-form-item label="昵名：" style="width:240px">
                <el-input v-model="userInfo.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别：">
                <el-radio-group v-model="userInfo.sex">
                    <el-radio value="null">保密</el-radio>
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
import { onMounted, reactive, computed } from "vue";

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

let styleWidth = 130;

onMounted(() => {
    // 在挂载后立即发送axios.get获取用户信息

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
