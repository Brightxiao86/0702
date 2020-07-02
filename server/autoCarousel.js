export default class Carousel {
    imgCon;
    ul;
    preDot;
    imgSrcList;
    btnList = []
    imgList = [];
    dotList = [];
    bool = false;
    pos = 0;
    direction = '';
    x = 0;
    autoBool = false;
    time = 200;
    WIDTH=1500;
    HEIGHT=623;
    LEFT = Symbol()
    RIGHT = Symbol()
    SPEED = 10
    constructor(_data,par){
        this.imgSrcList=_data
        this.creates(par)
    }
    creates(par){
        let carousel = this.ce('div',{
            width:this.WIDTH+'px',
            height:this.HEIGHT+'px',
            position:'relative',
            margin:'auto',
            overflow:'hidden' ,
            position:'relative',
            bottom:'0px',
            left:"-150px"

        })
        this.createImgCon(carousel);
        this.createButton(carousel);
        this.createDotList(carousel);
        par.appendChild(carousel)
          this.ul.style.left = (this.WIDTH - this.ul.offsetWidth)/2+'px';
        setInterval(()=>this.animation(),16);
        carousel.addEventListener('mouseenter',e=>this.mouseHandler(e));
        carousel.addEventListener('mouseleave',e=>this.mouseHandler(e));
        this.changeBgDot()
    }
    mouseHandler(e){
        if (e.type === 'mouseenter'){
            // 关闭 autopiay 
            this.autoBool = false
            // 防抖 变量 
            this.time = 300
        }else if (e.type === 'mouseleave'){
            this.autoBool = true
        }
    }
    ce(type,style){
        let elem = document.createElement(type)
        Object.assign(elem.style,style)
        return elem
    }

    createImgCon(parent){
        this.imgCon = this.ce('div',{
            width:this.WIDTH*2+'px',
            height:this.HEIGHT,
            position:'absolute',
            left:'0'
        })
        for(let i =0; i < this.imgSrcList.length;i++){
            let img = this.ce('img',{
                width:this.WIDTH+'px',
                height:this.HEIGHT+'px'
            })
            img.src = this.imgSrcList[i]
            this.imgList.push(img)
        }
        parent.appendChild(this.imgCon)
        this.imgCon.appendChild(this.imgList[0])
    }

    createButton(parent){
        let btnBox = ['left','right'];
        for (let i = 0;i < btnBox.length;i++){
            let img = this.ce('img',{
                position:'absolute',
                top:(this.HEIGHT - 60)/2 +'px',
                left:i === 0 ? '50px' : 'none',
                right:i === 1 ? '50px' : 'none'
            })
            // img.src = `./img/${btnBox[i]}.png`;
            parent.appendChild(img)
            this.btnList.push(img)
            img.addEventListener('click',e=>this.btnClickHandler(e))
        }
    }


    // createDotList 创建小圆点列表的函数
    createDotList(parent){
        this.ul = this.ce('ul',{
            listStyle:'none',
            margin:'0',
            padding:'0',
            position:'absolute',
            bottom:'41px',
            left:"580px",
        });
        // 循环创建 li 列表
        for(let i = 0;i < this.imgSrcList.length;i++){
            let li = this.ce('li',{
                width:'60px',
                height:'8px',
                float:'left',
                backgroundColor:"red",
                opacity: 0.6,
                marginLeft:i === 0 ? '0px' : '10px',

            })
            this.dotList.push(li)
            this.ul.appendChild(li)
        }
        parent.appendChild(this.ul)
        this.ul.addEventListener('click',e=>this.dotClickHandler(e))
    }


    

    btnClickHandler(e){
        if (this.bool) return
        if (e.target.src.includes('left.png')){
            this.pos--
            if(this.pos < 0) this.pos = this.imgSrcList.length-1;
            this.direction = this.RIGHT;
        } else{
            this.pos++
            if(this.pos > this.imgSrcList.length-1) this.pos = 0;
            this.direction = this.LEFT;     
        }
        this.createTextImg()
    }

    // 侦听 ul 事件回调函数
    dotClickHandler(e){
        if (e.target.nodeName !== 'LI') return;
        let index = this.dotList.indexOf(e.target);
        if (index === this.pos) return;
        this.direction = index > this.pos ? this.LEFT : this.RIGHT;
        console.log(index,this.direction)
        // 将 将当前 index 的值 赋值给 pos，这样图片也会随着一起走动
        this.pos = index;
        // 执行 createTextImg 函数，
        this.createTextImg()
    }


    // 点击左右按钮时，在图片容器头部或者尾部创建图片，挤走初始图片，达到移动效果
    createTextImg(){
        console.log(this.direction,this.LEFT)
        if(this.direction === this.LEFT){
            this.imgCon.appendChild(this.imgList[this.pos]);
            
            this.x = 0;
        }else if(this.direction === this.RIGHT){
            this.imgCon.insertBefore(this.imgList[this.pos],this.imgCon.firstElementChild)
            this.imgCon.style.left = -this.WIDTH+'px';
            this.x = -this.WIDTH;
        }
        console.log(this.x)
        this.bool = true
        this.changeBgDot()
    }

    // 定时器 当点击按钮或者小圆点的时候，每隔 16 毫秒 走动一段距离，让图片自动轮播
    animation(){
        this.imgConMove()
        this.autoPlay()
    }

    // 图片移动函数
    imgConMove(){
        if (!this.bool) return;
        if (this.direction === this.LEFT){
            this.x -= this.SPEED;
            if (this.x <= -this.WIDTH){
                this.imgCon.firstElementChild.remove();
                this.x = 0;
                this.bool = false
            }
            this.imgCon.style.left = this.x +'px';

        }else if(this.direction === this.RIGHT){
            this.x += this.SPEED
            if (this.x >= 0){
                this.bool = false;
                this.x = 0;
                this.imgCon.lastElementChild.remove()
            }
            this.imgCon.style.left = this.x + 'px'
        }
    }

    // 自动轮播图
    autoPlay(){
        if(!this.autoBool) return
        // 防抖 
        this.time-- 
        if (this.time > 0 ) return
        // 当 time 小于 0 ，重新赋值为 300 
        this.time = 200
        // 创建点击事件
        let evt = new MouseEvent('click')
        // 抛发事件   抛发给右按钮
        this.btnList[1].dispatchEvent(evt)
    }

    // 小圆点背景颜色切换
    changeBgDot(){
        if(this.preDot){
            this.preDot.style.backgroundColor = 'pink';
        }
        this.preDot = this.dotList[this.pos];
        this.preDot.style.backgroundColor = '##170DFF';
    }
}