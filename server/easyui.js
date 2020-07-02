//获取按钮
var bn=document.querySelector("button[type=submit]");
//disabled 属性规定应该禁用 input 元素。
//按钮置灰
bn.disabled=true;
//在按钮上添加数字
bn.textContent="登录(10)";
//设置时间
var time=10;
//设置时间多长时间运行
//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
var ids=setInterval(function(){
    //每次运行有减少
    time--;
    //如果时间为0时
    if(time===0){
     //取消置灰
      bn.disabled=false;
    //返回原来的样式
      bn.textContent="登录";
      //清除定时器
      clearInterval(ids);
      return;
    }
    //在按钮上添加时间
    bn.textContent="登录("+time+")";
},1000);