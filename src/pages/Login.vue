<template>
    <div id="top-body">
        <!-- 登录页面 -->
        <div id="loginPanel">
            <el-container>
                <el-header>
                    <i class="fa-close"></i>
                    <!-- <button>关闭</button> -->
                </el-header>
                <el-main>
                    
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </div>
    </div>
</template>


<script lang="ts" setup>

</script>

<style scoped>
#top-body {
    background-color: aquamarine;
    position: absolute;
    display: flex;
    width: 99%;
    height: 97%;
}

#loginPanel {
    background-color:burlywood;
    align-self: center;
    margin: auto;

    width: 400px;
    height: 560px;
    border-radius: 10px;
}
.el-container{
    height: 100%;
}
.el-header{
    background-color: brown;
    height: 30px;
    border-radius: 10px 10px 0 0;
}
.el-main{
    background-color: rgb(137, 224, 244);
    height: auto;
}
.el-footer{
    background-color: chocolate;
    height: 20px;
    border-radius: 0 0 10px 10px;

}

* {
    margin: 0;
    padding: 0;
    border: 0;
}
</style>

