# SchoolForum-backend

## 部署与运行

本项目使用[Node.js/npm](https://nodejs.cn/download/)作为包管理工具。

### 1. 安装依赖

```bash
npm install
```

### 2. 配置与初始化

本项目在`package.json`中提供了三种不同场景下的的配置。<br>

```
    "dev": "vite --host",
    #快速搭建一个前端服务器
    "build": "vite build",
    #打包vue项目到dist目录
    "preview": "vite preview" 
    #预览
```

修改`src\main.js`中的`axios.defaults.baseURL`属性为后端服务器URL。

### 3. 启动服务器

执行以下命令启动服务器：

```bash
npm run dev
```

成功启动后命令行显示:

```
    Local:   http://localhost:5173/
    #前端服务器在本机上的url
    Network: http://192.168.1.8:5173/
    #前端服务器在网络上的url
```
