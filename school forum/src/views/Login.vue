<script setup lang="ts">
import { ElContainer, ElForm, ElFormItem, ElHeader, ElInput, ElMain } from 'element-plus';

</script>

<template >
    <div style="justify-items: center;">
    <ElContainer style="width:360px;border:2px solid var(--el-border-color);border-radius: 8px;">
        <ElHeader 
        style="height: 24%;width: 100%;display: flex;justify-content: center;align-items: center;">
            <H1 style="color: var(--el-text-color-regular);">登录</H1>
        </ElHeader>
        <ElMain>
            <ElForm
        style="max-width:600px;justify-items: center"
        status-icon
    >
    <ElFormItem class="input">
        <ElInput type="UserName" v-model="userName" autocomplete="off" placeholder="用户名"></ElInput>
    </ElFormItem>

    <ElFormItem class="input">
        <ElInput type="Passowrd" v-model="password" autocomplete="off" placeholder="密码"></ElInput>
    </ElFormItem>

    </ElForm>
        </ElMain>
    </ElContainer>
</div>

</template>

<script lang="ts">
    export default {
        data(){
            return {
                userName:"",
                password:""
            }
        }
    }
</script>

<style>
    .input{
        width: 92%;
    }
</style>