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
        
        <div style="display: flex;justify-content: center;">

            <ElContainer 
            style="height: 320px;
            max-width: 600px;
            border-radius: 4px;
            border: solid 2px #B0C4DE;
            display: block;
            ">
            <ElContainer style="height: 70%;">
                <ElAside
                style="
                border-radius: 4px;
                border: solid 2px #B0C4DE;
                width: 160px;
                "
                >
                    <img
                    style="
                        width: 90%;
                        height: 90%;
                        margin-top: 5%;
                        margin-left: 5%;
                        object-fit: cover;"
                        
                        src="../image/doge.jpeg"
                    />
                </ElAside>

                <ElAside
                style="
                border-radius: 4px;
                border: solid 2px #B0C4DE;
                width: 440px;
                display: block;
                "
                >
                    <ElContainer style="display: flex;justify-content:start;margin-left: 15px;align-items: center;height: 25%;">
                        <p style="font-size: 1.25em;margin-right: 20px;">用户名</p>

                        <ElButton type="primary" style="margin-right: 20px;">关注</ElButton>

                        <ElButton type="primary" style="margin-right: 20px;">私信</ElButton>
                    </ElContainer>

                    <ElContainer style="display: flex;justify-content:start;margin-left: 15px;align-items: center;height: 25%;">
                        <p style="font-size: 1.25em;">身份</p>
                    </ElContainer>

                    <ElContainer style="display: flex;justify-content:start;margin-left: 15px;align-items: center;height: 25%;">
                        <p style="font-size: 1.25em;">个性签名</p>
                    </ElContainer>

                    <ElContainer style="display: flex;justify-content:start;margin-left: 15px;align-items: center;height: 25%;">
                        <p style="font-size: 1.25em;margin-right: 20px">关注个数</p>

                        <p style="font-size: 1.25em;margin-right: 20px">粉丝个数</p>
                    </ElContainer>
                </ElAside>
            </ElContainer>
            

            <ElContainer style="display: flex;
            height: 30%;
            justify-content: space-around;
            align-items: center;">

                <ElButton type="primary" style="
                ">
                帖子
                </ElButton>

                <ElButton type="primary" style="
                ">
                评论
                </ElButton>

                <ElButton type="primary" style="
                ">
                收藏
                </ElButton>

                <ElButton type="primary" style="
                ">
                关注
                </ElButton>

            </ElContainer>

            </ElContainer>

        </div>
        

        <ElContainer style="width: 50%;margin-left: 25%;margin-right: 25%;display: flex;flex-direction: column;">


            
            
            <ElContainer style="" v-for="item in board" class="scrollbar-demo-item"
            @click = "clickPost"
            >
                <ElHeader style="height: 20px;font-weight: bold;font-size: 1.25em;">
                    {{ item.name }}
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
                        <ElContainer>{{ item.author }}</ElContainer>
                        <ElContainer>{{ item.time }}</ElContainer>
                    </div>
                </ElAside>
            </ElContainer>
            
    
        </ElContainer>
            
        
    
        
        
    </template>
    
    <script lang="ts">
        import router from '@/router';
        export default{
    
            methods:{
                onClick_publish_post(){
                    router.push('/PublishPost')
                },
                clickPost(){
                    router.push("/Post")
                }
            },
    
            data() {
                return{
                    board:[
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
                        },
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
                        },
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
                        },
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
                        },
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
                        },
                        {
                            name:"帖子标题",
                            content:"帖子内容XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            time:"2025-12-3",
                            author:"Lee",
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
        
    </style>