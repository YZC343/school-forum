<script setup lang="ts">
import { ElButton, ElContainer, ElHeader, ElMain, ElMenu } from 'element-plus';

</script>
    
<template>
    <ElMenu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.path"
    router
    style="display: flex;align-items: center;justify-content: space-between;"
    >
        <el-menu-item  index="/home">首页</el-menu-item>

        
            <div style="display: flex;">
                <ElInput style="height: 60%;width: 100%;" type="UserName"  autocomplete="off" placeholder=""></ElInput>

                <ElButton style="height: 60%;" type="primary">搜索</ElButton>
            </div>
            
            <div style="display: flex;">
                <el-menu-item index="/home">私信</el-menu-item>

                <el-menu-item index="/home">用户</el-menu-item>
            </div>
        
            
        
    </ElMenu>

    <ElContainer>
        
    </ElContainer>
</template>

<style>
    navbar {
        background-color: #333;
        color: #fff;
        padding: 10px;
    }
    navbar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
    }
    navbar ul li {
        cursor: pointer;
        }
        router-link-active {
        color: #f00;
    }
</style>