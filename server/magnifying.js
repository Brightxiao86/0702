import Utils from "./Utils.js";
export default class magnifying{
    max;
    min;
    mask;
    imgCon;
    preImg;
    x=0;
    y=0;
    pos=0;
    bnList=[];
    MASK_WIDTH=303.75;
    MIN_WIDTH=450;
    MAX_WIDTH=540;
    IMAGE_MARGIN=9;
    IMAGE_WIDTH=58;
    iconList;
    constructor(_data,parent){
    this.iconList = _data
    this.createGlass(parent)
    }

    // 创建
    createGlass(boxparent){
        let zoom=Utils.ce("div",{
            position:'absolute',
            left:"100px",
            top:"100px"
        });
        this.createMin(zoom);
        this.createMax(zoom);
        this.createCarousel(zoom);
        boxparent.appendChild(zoom);
    }

    
    createMin(parent){
        this.min=Utils.ce("div",{
            position:"absolute",
            width:this.MIN_WIDTH+"px",
            height:this.MIN_WIDTH+"px",
            backgroundImage:"url(./img/a.jpg)",
            backgroundSize:"100% 100%",
            border:"1px solid #CCCCCC"
        });
        this.mask=Utils.ce("div",{
            position:"absolute",
            width:this.MASK_WIDTH+"px",
            height:this.MASK_WIDTH+"px",
            display:"none",
            backgroundColor:"rgba(180,160,0,0.3)"
        })
        this.min.appendChild(this.mask);
        parent.appendChild(this.min);
        this.min.addEventListener("mouseenter",e=>this.mouseHandler(e));
    }

    // 
    createMax(parent){
        this.max=Utils.ce("div",{
            position:"absolute",
            width:this.MAX_WIDTH+"px",
            height:this.MAX_WIDTH+"px",
            backgroundImage:"url(./img/a.jpg)",
            border:"1px solid #CCCCCC",
            display:"none",
            left:this.MIN_WIDTH+1+"px"
        });
        parent.appendChild(this.max);
    }

    // 自动轮播图
    createCarousel(parent){
        let div=Utils.ce("div",{
            position:"absolute",
            width:this.MIN_WIDTH+2+"px",
            height:"58px",
            top:this.MIN_WIDTH+2+"px"
        })
        let left=Utils.ce("div",{
            width:"22px",
            height:"32px",
            top:"13px",
            backgroundImage:"url(./img/sprite.png)",
            backgroundPositionX:"0px",
            backgroundPositionY:"-54px",
            position:"absolute",
        });
        // 复制标签 会将标签的所有标签属性完全复制
        let right=left.cloneNode(false);
        left.style.left="0px";//先复制以后再加
        Object.assign(right.style,{
            right:"0px",
            backgroundPositionX:"-78px",
            backgroundPositionY:"0px",
        })
        this.bnList.push(left);
        this.bnList.push(right);
        div.appendChild(left);
        div.appendChild(right);

        let con=Utils.ce("div",{
            position:"absolute",
            width:"380px",
            height:"58px",
            left:"36px",
            overflow:"hidden",
        })
        div.appendChild(con);
        this.createImageCon(con);
        parent.appendChild(div);
        div.addEventListener("click",e=>this.clickHandler(e));
    }

    // 自动轮播图容器
    createImageCon(parent){
        let width=this.iconList.length*this.IMAGE_WIDTH+this.iconList.length*this.IMAGE_MARGIN*2-this.IMAGE_MARGIN;
            this.imgCon=Utils.ce("div",{
                position:"absolute",
                width:width+"px",
                height:"58px",
                left:0,
                transition: "all 0.5s"
            });
            for(let i=0;i<this.iconList.length;i++){
                let img=Utils.ce("img",{
                    width:this.IMAGE_WIDTH-4+"px",
                    height:this.IMAGE_WIDTH-4+"px",
                    border:`2px solid rgba(255,0,0,${i==0 ? 1 : 0})`,
                    marginLeft:`${i===0 ? '0px' : this.IMAGE_MARGIN+"px"}`,
                    marginRight: this.IMAGE_MARGIN+"px"
                });
                img.src=this.iconList[i];
                if(i===0) this.preImg=img;
                this.imgCon.appendChild(img);
            }
            this.imgCon.addEventListener("mouseover",e=>this.iconMouseHandler(e));
            parent.appendChild(this.imgCon);
    }

    iconMouseHandler(e){
        if(e.target.nodeName!=="IMG") return;
            if(this.preImg){
                this.preImg.style.border="2px solid rgba(255,0,0,0)";
            }
            this.preImg=e.target;
            this.preImg.style.border="2px solid rgba(255,0,0,1)"
        //    console.log( e.target.src.replace("_icon",""));
            this.min.style.backgroundImage=this.max.style.backgroundImage=`url(${e.target.src.replace(/_icon/,"")})`;
    }

    mouseHandler(e){
        if(e.type==="mouseenter"){
            this.mask.style.display=this.max.style.display="block"
            this.min.addEventListener("mouseleave",e=>this.mouseHandler(e));
            this.min.addEventListener("mousemove",e=>this.mouseHandler(e));
        }else if(e.type==="mousemove"){
            // 获取min块的相对视口位置，矩形
            this.move(e.clientX,e.clientY);
        }else if(e.type==="mouseleave"){
            this.mask.style.display=this.max.style.display="none"
            this.min.removeEventListener("mouseleave",e=>this.mouseHandler(e));
            this.min.removeEventListener("mousemove",e=>this.mouseHandler(e));
        }
    }

    
    move(mouseX,mouseY){
        let rect=this.min.getBoundingClientRect();
        this.x=mouseX-this.MASK_WIDTH/2-rect.x;
        this.y=mouseY-this.MASK_WIDTH/2-rect.y;
            if(this.x<0) this.x=0;
            if(this.y<0) this.y=0;
            if(this.x>this.MIN_WIDTH-this.MASK_WIDTH) this.x=this.MIN_WIDTH-this.MASK_WIDTH;
            if(this.y>this.MIN_WIDTH-this.MASK_WIDTH) this.y=this.MIN_WIDTH-this.MASK_WIDTH;
            this.mask.style.left=this.x+"px";
            this.mask.style.top=this.y+"px";
            this.max.style.backgroundPositionX=-this.x*(this.MAX_WIDTH/this.MASK_WIDTH)+"px";
            this.max.style.backgroundPositionY=-this.y*(this.MAX_WIDTH/this.MASK_WIDTH)+"px";
    }

    clickHandler(e){
        let index=this.bnList.indexOf(e.target)
            if(index<0) return
            if(index===0){
                this.pos--;
                if(this.pos<0) this.pos=0;
            //    imgCon.style.left="0px";
            }else{
                // imgCon.style.left="-380px";
                this.pos++;
                if(this.pos>Math.floor(this.iconList.length/5)){
                    this.pos=Math.floor(this.iconList.length/5)
                }
            }
      
            if(this.pos===Math.floor(this.iconList.length/5)){
                this.imgCon.style.left=-(this.imgCon.offsetWidth-380)+"px"
            }else{
                this.imgCon.style.left=this.pos*-380+"px";
            }
           
    }
}