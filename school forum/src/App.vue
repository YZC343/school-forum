<script setup lang="ts">
import { ElButton, ElContainer, ElHeader, ElMain, ElMenu } from 'element-plus';

</script>

<template>
  <ElContainer>
    <ElHeader>
      <div class="header">
        <router-link to="/Login"><ElButton type="primary" class="menubutton">登录</ElButton></router-link>
        <router-link to="/Sign_up"><ElButton type="primary" class="menubutton">注册</ElButton></router-link>
        <router-link to="/Forum"><ElButton type="primary" class="menubutton">论坛</ElButton></router-link>
      </div>
    </ElHeader>
    <ElMain style="overflow: hidden;">
      <router-view></router-view>
    </ElMain>
  </ElContainer>
</template>

<style>
  .menubutton{
    display: flex;
    width: 100px;
    height: 56px;
  }
  .header{
    position: fixed;
    z-index: 999;
  }
</style>