export default class Index {
    arr;
    form;
    ids;
    button;
    readMe;
    inputs;
    constructor(selector,_readMe) {
        this.readMe=_readMe;
        // "input:not([type=radio])"
        this.inputs= Array.from(document.querySelectorAll(selector));
        this.form = document.querySelector("form");
        this.button = document.querySelector("button[type=submit]");
        this.button.disabled = true;
        this.arr = new Array(this.inputs.length).fill(false);
        this.form.addEventListener("input", e=>this.inputHandler(e));
        if(this.readMe){
            this.readMe.addEventListener("click",e=>this.clickHandler(e));
        }
    }
    clickHandler(e){
        this.buttonEnabled();
    }
    
    inputHandler(e) {
        var index = this.inputs.indexOf(e.target);
        if (index < 0) return;
        if (this.ids) return;
        this.ids = setTimeout(()=>{
            clearTimeout(this.ids);
            this.ids = 0;
            this.arr[index] = this.regTest(e.target.value, index);
            if (this.arr[index]) {
                this.removeClass(e.target.parentElement.parentElement, "has-error");
                this.addClass(e.target.parentElement.parentElement, "has-success");
            } else {
                this.removeClass(e.target.parentElement.parentElement, "has-success");
                this.addClass(e.target.parentElement.parentElement, "has-error");
            }
          
            this.buttonEnabled();
        }, 500);
    }
    
    buttonEnabled(){
        this.button.disabled = true;
        if (this.arr.indexOf(false) < 0) {
            if(this.readMe && !this.readMe.checked) return;
            this.button.disabled = false;
            this.addClass(this.button,"btn-success")
        }
    }
    
    regTest(text, index) {
        switch (index) {
            case 0:
                return /^\D\w{7,19}$/.test(text);
            case 1:
                return /^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/.test(text);
            case 2:
                return /^.{1,8}$/.test(text);
            case 3:
                return /^\d{1,3}$/.test(text);
            case 4:
                return /^1\d{10}$/.test(text);
            case 5:
                return /^\w+@\w+\.com$/.test(text);
    
        }
    }
    
    
    addClass(elem, className) {
        var arr = elem.className.match(/\S+/g);
        var arr1 = className.match(/\S+/g);
        arr1.forEach(function (item) {
            if (arr.indexOf(item) === -1) arr.push(item);
        });
        elem.className = arr.join(" ");
    }
    
    // 删除class样式
    removeClass(elem, className) {
        var arr = elem.className.match(/\S+/g);
        var arr1 = className.match(/\S+/g);
        // 从一个数组中删除与另一个数组中相同的元素
        arr = arr.filter(function (item) {
            return arr1.indexOf(item) === -1;
        });
        elem.className = arr.join(" ");
    } 
}