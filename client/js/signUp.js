//用户名，
//pass密码框，
//button提交按钮，
//error注册失败显示,
//ids节流
var user,
  pass,
  button,
  error,
  ids = "";
var abc = Array.from(document.querySelectorAll("input"));
var arr = new Array(abc.length).fill(false);
init();
function init() {
  error = document.querySelector(".error");
  user = document.querySelector(".user");
  pass = document.querySelector(".password");
  button = document.querySelector("button");
  button.addEventListener("click", clickHandler);
  for (var i = 0; i < abc.length; i++) {
    abc[i].addEventListener("input", inputHandler);
    abc[i].addEventListener("mouseenter", mouseHandler);
    abc[i].addEventListener("mouseleave", mouseHandler);
  }
}
//表单输入函数
function inputHandler(e) {
  error.style.display = "none";
  var index = abc.indexOf(e.target);
  if (index < 0) return
  if (ids) return;
  //节流
  var ids = setTimeout(() => {
    clearTimeout(ids);
    ids = 0;
    arr[index] = regTest(abc[index].value, index);
    if (arr[index]) {
      abc[index].style.borderColor = "green";
    } else {
      abc[index].style.borderColor = "red";
    }
  }, 500);
}

// ajax发送数据
function clickHandler(e) {
  e.preventDefault();
  if (arr.indexOf(false) < 0) {
    ajax("signUp", { user: user.value, password: pass.value });
  }
}
 // ajax 发送
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
      if (this.response === "注册成功") {
        alert("注册成功跳转至登录界面");
        window.location.href = "./signIn.html"; //注册成功跳转至登录界面
      } else {
        alert("用户名重复，请重新输入")
      }
    }
  }

//表单验证
function regTest(value, index) {
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