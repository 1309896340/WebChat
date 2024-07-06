<template>
    <div id="top-body">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
    import {onMounted} from "vue";
    import { RouterView, useRouter } from "vue-router";

    const router = useRouter();
    
    onMounted(()=>{
        router.replace("/login");
    });
</script>

<style scoped>

#top-body {
    background: linear-gradient(45deg, cyan, blue);
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
}
</style>
