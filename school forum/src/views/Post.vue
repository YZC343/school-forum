<script setup lang="ts">
import { ElAside, ElButton, ElContainer, ElHeader, ElMain, ElMenu } from 'element-plus';

</script>
    
<template>
    
    <ElMenu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.path"
    router
    style="display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top:0;
    "
    >   
        <div style="display: flex;">
            <el-menu-item  index="/home">首页</el-menu-item>

            <el-menu-item-group>

            </el-menu-item-group>
        </div>
        

        
            <div style="display: flex;">
                <ElInput style="height: 60%;width: 100%;" type="UserName"  autocomplete="off" placeholder=""></ElInput>

                <ElButton style="height: 60%;" type="primary">搜索</ElButton>
            </div>
            
            <div style="display: flex;">
                <el-menu-item index="/home">私信</el-menu-item>

                <el-menu-item index="/User">用户</el-menu-item>
            </div>
        
            
        
    </ElMenu>   
    <ElContainer style="width: 50%;margin-left: 25%;margin-right: 25%;display: flex;flex-direction: column;">
        <ElContainer class="scrollbar-demo-item">
            <ElHeader style="height: 20px;font-weight: bold;font-size: 1.25em;">
                {{ post.author }}
            </ElHeader>
            <ElHeader style="height: 20px;
            margin-top: 10px;
            font-weight: normal;
            font-size: 1em;">
                {{ post.title }}
            </ElHeader>
            
            <ElMain
                style="
                margin: 10px;
                border-radius: 4px;
                border: solid 2px #B0C4DE;"
                >{{ post.content }}
            </ElMain>

            <div style="display: flex;justify-content: space-around;">
            
                <ElContainer style="margin-left: 10px;">{{ post.time }}</ElContainer>
                <div style="display: flex;justify-content: center;">
                    <ElButton style="height: 60%;width: 40px;height: 40px;" type="primary" circle size:large>点赞</ElButton>
                    <ElButton style="height: 60%;width: 40px;height: 40px;" type="primary" circle>收藏</ElButton>
                </div>
            </div>
        </ElContainer>
        <ElContainer style="" v-for="(item,index) in replies":key="index" class="scrollbar-demo-item">
            <ElHeader style="display: flex;justify-content: space-between;">
                <ElContainer style="height: 20px;font-weight: bold;font-size: 1.25em;">
                    {{ item.author }}
                </ElContainer>
                
                <ElContainer style="text-align:justify;">
                    {{index+1}}
                </ElContainer>
            </ElHeader>
            <ElMain
                style="
                margin: 10px;
                border-radius: 4px;
                border: solid 2px #B0C4DE;"
                >{{ item.content }}
            </ElMain>
            <ElAside>
                <div 
                    style="display: flex;"
                    
                >
                    <ElContainer style="margin-left: 10px;">{{ item.time }}</ElContainer>
                </div>
            </ElAside>
        </ElContainer>
        

    </ElContainer>
        
    <div style="height: 70px;background-color: white;"></div>

    <div class="footer"
        style="border: 2px solid #666;"
    >
        
            <ElFormItem style="width: 100%;">
                <ElInput 
                style="width: 95%;" 
                show-word-limit
                maxlength="800"
                :autosize = "{ minRows: 18, maxRows: 30 }"
                type="textarea"
                v-model="content" 
                autocomplete="off" 
                placeholder="输入帖子内容">
                </ElInput>
            </ElFormItem>
            <ElButton circle style="width: 30px;height: 30px;">发送</ElButton>
    </div>
    
</template>

<script lang="ts">
    import router from '@/router';
    export default{

        methods:{
            onClick_publish_post(){
                router.push('/PublishPost')
            }
        },

        data() {
            return{
                post:{
                    author:"用户名",
                    title:"帖子标题",
                    content:"帖子内容",
                    time:"2025-12-5"
                },
                replies:[
                    {
                        author:"回复用户名",
                        content:"回复内容",
                        time:"2025-12-5"
                    },
                    {
                        author:"回复用户名",
                        content:"回复内容",
                        time:"2025-12-5"
                    },
                    {
                        author:"回复用户名",
                        content:"回复内容",
                        time:"2025-12-5"
                    },
                    {
                        author:"回复用户名",
                        content:"回复内容",
                        time:"2025-12-5"
                    },
                ]
            }
        },
    }
</script>

<style >
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
    .scrollbar-demo-item {
        display: flex;
        justify-content: center;
        margin: 10px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
        word-break: break-all;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5%;
        color: #fff;
        text-align: center;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        background-color: #fff;
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
        border-radius: 4px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
    
</style>