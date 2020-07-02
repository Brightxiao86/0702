export default class SingnUp{
    arr; 
    form; 
    ids; 
    button; 
    inputs;
    
    constructor(){
        this.init()
    }

    init(){
        this.inputs = Array.from(document.querySelectorAll('input'));
        this.button = document.querySelector('button[type=submit]"');
        this.arr = new Array(2).fill(false);
        this.form = document.querySelector('form');
        this.form.addEventListener('input',e=>this.inputHandler(e));
        this.button.addEventListener("click",e=>this.clickHandler(e))
    }
    
    // input 输入事件
    inputHandler(e){
        let index = this.inputs.indexOf(e.target)
        if (index < 0) return
        if(this.ids) return
        // 节流
        this.ids = setTimeout(()=>{
            clearTimeout()
            this.ids = 0
            this.arr[index] = this.rgetest(e.target.value,index)
            if(this.arr[index]){
                e.target.style.border = '1px solid green';
                e.target.style.boxShadow = "0px 0px px 1px rgb(24, 199, 24)";
                // console.log(e.target);
            }else{
                e.target.style.border = '1px solid red';
            }
            this.buttonEnabled()
        },500)
    }

    // ajax
    clickHandler(e){
        e.preventDefault();
        if(this.arr.indexOf(false) < 0){
            console.log(this.arr)
            console.log(this.inputs[0].value,this.inputs[1].value)
            this.ajax("signUp",{user:this.inputs[0].value,password:this.inputs[1].value,})
        }
    }

    //
    ajax(type,data){
        var xhr=new XMLHttpRequest();
        xhr.addEventListener("readystatechange",e=>this.readyStateHandler(e));
        xhr.open("POST","http://localhost:8000/"+type);
        xhr.send(JSON.stringify(data));
    }

    readyStateHandler(e){
        console.log(e.currentTarget.status)
        if(e.currentTarget.readyState===4 && e.currentTarget.status===200){
            if(e.currentTarget.response === "用户名注册成功"){
                alert("注册成功，正在您跳转到登录界面")
                window.location.href = "./signin.html"
            }else{
                alert("用户名重复，请重新输入")
            }
        }
    }

    buttonEnabled(){
        if(this.arr.indexOf(false) < 0){
            this.button.style.backgroundColor = 'green'
            this.button.style.color = 'white'
            
        }else{
            this.button.style.backgroundColor = '#F0F0F0'
            this.button.style.color = '#333333'
        }
        
    }

    // 正则表达式判断回调函数
    rgetest(value, index) {
        switch (index) {
            // test 方法：当字符串满足正则，返回 true 反之 false
            case 0:
                return /^\D\w{7,19}$/.test(value);
            case 1:
                return /^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(value);
            case 2:
                return /^.{1,8}$/.test(value);
            case 3:
                return /^\d{1,3}$/.test(value);
            case 4:
                return /^1\d{10}$/.test(value);
            case 5:
                return /^\w+@\w+\.com$/.test(value);
        }
    }
}