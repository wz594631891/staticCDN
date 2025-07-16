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

### CDN链接 (jsDelivr)
本项目支持通过jsDelivr CDN加速访问资源，格式如下：
```
https://fastly.jsdelivr.net/gh/wz594631891/staticCDN@版本号/文件路径
```
> 提示：若未指定版本号，默认使用最新版本。建议添加版本号以确保稳定性<mcreference link="https://blog.csdn.net/nineya_com/article/details/103498700" index="3">3</mcreference>。

#### 示例
- **Bootstrap CSS**:
  ```html
  <link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/wz594631891/staticCDN/css/bootstrap.min.css">

  ```
- **jQuery JS**:
  ```html
  <script src="https://fastly.jsdelivr.net/gh/wz594631891/staticCDN/js/jquery.min.js"></script>
  ```
- **压缩版本** (自动生成):
  ```html
  <script src="https://fastly.jsdelivr.net/gh/wz594631891/staticCDN/js/bootstrap.min.js"></script>
  ```

## 包含的主要库

- Bootstrap
- Element UI
- LayUI
- jQuery
- Vue.js

## 许可证

[MIT](LICENSE)