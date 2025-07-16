# staticCDN

这是一个静态资源CDN项目，用于存放和管理前端开发中常用的CSS和JavaScript库。

## 项目结构

- **css/**: 包含各种CSS框架和样式文件
  - bootstrap.css: Bootstrap框架样式
  - elementUI/: Element UI组件库样式
  - layui/: LayUI框架相关文件
  - loading.css: 加载动画样式
  - modules/: 各种CSS模块

- **js/**: 包含各种JavaScript库和插件
  - bootstrap.js: Bootstrap框架脚本
  - elementUI/: Element UI组件库脚本
  - jquery.js: jQuery库
  - layui.js: LayUI框架核心脚本
  - loading.js: 加载动画脚本
  - modules/: 各种JavaScript模块
  - vue.js: Vue.js框架

## 使用方法

直接通过相对路径引用所需的静态资源文件即可。例如：
```html
<link rel="stylesheet" href="css/bootstrap.css">
<script src="js/jquery.js"></script>
```

## 包含的主要库

- Bootstrap
- Element UI
- LayUI
- jQuery
- Vue.js

## 许可证

[MIT](LICENSE)