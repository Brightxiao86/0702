//user用户名，
//pass密码框，
//button提交按钮，
//error注册失败显示,
//ids节流
var user,
    pass,
    button,
    error,
    ids = "";
    //获取input输入框的内容 并且转成数组赋值给abc
var abc = Array.from(document.querySelectorAll("input"));
//fill() 方法用于将一个固定值替换数组的元素。
//新建一个新的数组并且用false 代替 方便判断账号和密码的错误
var arr = new Array(abc.length).fill(false); 
init();
function init() {
    //获取注册失败的显示
    error = document.querySelector(".error");
    //获取用户名
    user = document.querySelector(".user");
    //获取密码
    pass = document.querySelector(".password");
    //获取按钮
    button = document.querySelector("button");
    //给按钮添加点击事件
    button.addEventListener("click", clickHandler);
    //循环遍历数组abc
    for (var i = 0; i < abc.length; i++) {
        //给input添加点击事件
        abc[i].addEventListener("input", inputHandler);
        //给数组里面的第i项添加鼠标进入事件
        abc[i].addEventListener("mouseenter", mouseHandler);
        //给数组里面的第i项添加鼠标移除事件
        abc[i].addEventListener("mouseleave", mouseHandler);
    }
}
//打印
console.log(user.value, pass.value)
//表单输入函数
//点击input执行下面的函数
function inputHandler(e) {
    //查找数组被点击的元素 并且赋值给index
    var index = abc.indexOf(e.target);
    //如果index小于0时 就跳出不执行下面的函数
    if (index < 0) return
    if (ids) return;
    //节流
    var ids = setTimeout(() => {
        //清除时间定时器
        clearTimeout(ids);
        ids = 0;
        arr[index] = examine(abc[index].value, index);
        if (arr[index]) {
            abc[index].style.borderColor = "green";
        } else {
            abc[index].style.borderColor = "red";
        }
      }, 500);
    }
  // ajax发送数据
function clickHandler(e) {
    //阻止默认事件
    e.preventDefault();
    if (arr.indexOf(false) < 0) {
        console.log(user.value, pass.value)
        ajax("signIn", { user: user.value, password: pass.value });
    }
}
//发送接收数据
function ajax(type, data) {
    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", readyStateHandler);
    xhr.open("POST", "http://localhost:8000/" + type);
    xhr.send(JSON.stringify(data));
}


// 接受服务器返回的信息
    function readyStateHandler(e) {
        if (this.readyState === 4 && this.status === 200) {
            if (this.response === "登陆成功") {
                alert("登陆成功");
                //注册成功跳转转首页
                window.location.href = "http://127.0.0.1:5500/client/homepage.html"; 
            } else {
                alert("用户名不存在，请重新输入")
            }
        }
    }

//表单验证
function examine(value, index) {
    switch (index) {
        case 0:
            if (value.includes("@")) {

                return /^\w+@\w+\.com$/.test(value);

            } else if (value.length === 11) {
               
                return /^1\d{10}$/.test(value);

            } else {
                return /^\D\w{9,19}$/.test(value);
            }
            break;
            case 1:
            return /^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(value);
            break;
    }
}
//划过表单输入框时边框颜色变化
function mouseHandler(e) {
    var index = abc.indexOf(e.target);
    if (e.type === "mouseenter") {
        abc[index].style.borderColor = "#ff0036";
    } else {
        if (arr[index] || abc[index].value === "") {
            abc[index].style.borderColor = "#f1eeee";
        } else {
            abc[index].style.borderColor = "#ff0036";
        }
    }
}