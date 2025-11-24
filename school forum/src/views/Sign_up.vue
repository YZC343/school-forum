<script setup lang="ts">
import { ElButton, ElContainer, ElFooter, ElForm, ElFormItem, ElHeader, ElInput, ElMain, messageConfig } from 'element-plus';

</script>

<template >
    <div style="justify-items: center;">
    <ElContainer style="width:360px;border:2px solid var(--el-border-color);border-radius: 8px;">
        <ElHeader 
        style="height: 24%;width: 100%;display: flex;justify-content: center;align-items: center;">
            <H1 style="color: var(--el-text-color-regular);">注册</H1>
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

        <ElFormItem class="input">

            <ElInput type="Passowrd" v-model="password_confirm" autocomplete="off" placeholder="确认密码"></ElInput>
        </ElFormItem>

        <ElFormItem class="input">
            <ElInput type="email" autocomplete="off" v-model="email" placeholder="邮箱"></ElInput>
        </ElFormItem>

        </ElForm>
    </ElMain>
    <ElFooter style="display: flex;justify-content: center;">
        <ElButton @click="onClick"  type="primary">确认</ElButton>
    </ElFooter>
    </ElContainer>
</div>

</template>

<script lang="ts">
    import axios from 'axios';
    import router from '@/router';
    export default {
        data() {
            return {
                userName:"",
                password:"",
                password_confirm:"",
                email:"",
                };
            },
        methods: {
            onClick() {
                //if(this.userName!=''&&this.password==this.password_confirm&&this.email!=''){
                //    return this.postfrom()
                //}
                router.push({path:'/Login'})
                console.log("sign_up")
            },

            postfrom() {
                
                axios.post('http://127.0.0.1:5000/sign_up',{username:this.userName,password:this.password,email:this.email})
                .then(response => console.log(response))
                .catch(error => console.error(error));
            }
        },
        /*
        mounted(){
            axios.post('/api/sign_up')
            .then(request => {
                request.data=[this.userName,this.password,this.email]
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
        */
    }
</script>

<style>
    .input{
        width: 92%;
    }
</style>

#