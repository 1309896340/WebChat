<template>
    <div id="top-body">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
    import { RouterView, useRouter } from "vue-router";

    const router = useRouter();
</script>

<style scoped>

#top-body {
    background: linear-gradient(45deg, cyan, blue);
    /* background: white; */
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
}
</style>
