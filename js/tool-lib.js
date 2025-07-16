    // 一
    //    /**
    // * 将此js文件放在所以页面引入的其他js文件上方
    // */

    // //loading动画 https://juejin.cn/post/7301207533251543067
    // // 加载HTML图
    // var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left: 0;top: 0;right: 0;bottom: 0;z-index: 99999;"><div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);"><div class="loadEffect"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></div><style type="text/css">.loadEffect{width:100px;height:100px;position:relative;margin:0 auto;margin-top:100px;}.loadEffect span{display:inline-block;width:16px;height:16px;border-radius:50%;background:lightgreen;position:absolute;-webkit-animation:load 1.04s ease infinite;}@-webkit-keyframes load{0%{opacity:1;}100%{opacity:0.2;}}.loadEffect span:nth-child(1){left:0;top:50%;margin-top:-8px;-webkit-animation-delay:0.13s;}.loadEffect span:nth-child(2){left:14px;top:14px;-webkit-animation-delay:0.26s;}.loadEffect span:nth-child(3){left:50%;top:0;margin-left:-8px;-webkit-animation-delay:0.39s;}.loadEffect span:nth-child(4){top:14px;right:14px;-webkit-animation-delay:0.52s;}.loadEffect span:nth-child(5){right:0;top:50%;margin-top:-8px;-webkit-animation-delay:0.65s;}.loadEffect span:nth-child(6){right:14px;bottom:14px;-webkit-animation-delay:0.78s;}.loadEffect span:nth-child(7){bottom:0;left:50%;margin-left:-8px;-webkit-animation-delay:0.91s;}.loadEffect span:nth-child(8){bottom:14px;left:14px;-webkit-animation-delay:1.04s;}</style>'
    // // 呈现loading效果
    // document.write(_LoadingHtml);
    // // 监听加载状态改变
    // document.onreadystatechange = completeLoading;
    // // 加载状态为complete时移除loading效果
    // function completeLoading() {
    // 　　if (document.readyState == "complete") {
    // 　　　　var loadingMask = document.getElementById('loadingDiv');
    // 　　　　loadingMask.parentNode.removeChild(loadingMask);
    // 　　}
    // }
/*
<!-- loading动画  head底部 -->
<link href="/static/css/loading.css" rel="stylesheet" type="text/css">

<div class="curtain"></div> <!-- 幕布 -->  
 <div class="loader"></div><!--  在body添加loader -->  

  <!-- 导入lodaing动画JS footer顶部 -->
  <script src="/static/js/loading.js"></script>
 */

    $(document).ready(function() {  
      // 在这里编写页面加载完成后需要执行的代码  
      // 二
      // 获取 loader element  
  var loader = document.querySelector('.loader');  
    
  // // When the user clicks on the "load data" button, start the loading animation.  
  // document.querySelector('#loadDataButton').addEventListener('click', function() {  
  //   loader.style.display = 'block';  
  //   // Make an AJAX request.  
  //   // ...  
  // });  
    
  // // When the AJAX request is done, hide the loading animation.  
  // xhr.addEventListener('load', function() {  
  //   loader.style.display = 'none';  
  // });
  setTimeout(function(){
    try {
      
      var curtain =document.querySelector(".curtain")
      curtain.style.display = 'none'; // 隐藏loading幕布 
    } catch (error) {
      
    }
    loader.style.display = 'none';  
  },20000)
    });