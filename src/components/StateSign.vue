<template>
    <span v-show="ready">
        <el-icon v-if="status" color="green">
            <Select></Select>
        </el-icon>
        <el-icon v-else color="red">
            <CloseBold></CloseBold>
        </el-icon>
    </span>
</template>

<script lang="ts" setup>

import { ref } from "vue"
defineProps(["ready", "status"]);
</script>
