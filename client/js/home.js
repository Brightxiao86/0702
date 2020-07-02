import Utils from "./Utils.js";
// navList，iconList商品分类下的导航列表数据
var navList = [
  "女装 /内衣",
  "男装 /运动户外",
  "女鞋 /男鞋 /箱包",
  "美妆 /个人护理",
  "腕表 /眼镜 /珠宝饰品",
  "手机 /数码 /电脑办公",
  "母婴玩具",
  "零食 /茶酒 /进口食品",
  "生鲜水果",
  "大家电 /生活电器",
  "家具建材",
  "汽车 /配件 /用品",
  "家纺 /家饰 /鲜花",
  "医药保健",
  "厨具 /收纳 /宠物",
  "图书音像",
];
//商品分类导航iconfont数据
var iconList = [
  "&#x3459;",
  "&#x346c;",
  "&#xe638;",
  "&#xe661;",
  "&#xe669;",
  "&#xe615;",
  "&#xe61f;",
  "&#xe60c;",
  "&#xe7f0;",
  "&#xe623;",
  "&#x3453;",
  "&#xec6d;",
  "&#xe724;",
  "&#x3460;",
  "&#xe635;",
  "&#x3461;",
];
var carouselImgList = Array.from(document.querySelectorAll(".item img"));
//第1-2列商品列表图片元素数组

var goodsList1 = Array.from(document.querySelectorAll(".goods1 img"));
var goodsList2 = Array.from(document.querySelectorAll(".goods2 img"));
//第3列商品列表数据
var goods3data = [
  {
    keyword: "男士护肤品套装化妆品补水保湿控油",
    price: "￥69",
    src: "./img/1-2.png",
  },
  {
    keyword: "COACH/蔻驰2019专柜新款铆钉风琴拼皮",
    price: "￥3399",
    src: "./img/1-3.png",
  },
  {
    keyword: "FURLA/芙拉女款 红色印花牛皮手提包单",
    price: "￥1980",
    src: "./img/1-4.png",
  },
  {
    keyword: "COACH 女士手提单肩包 黑色 均码",
    price: "￥2590",
    src: "./img/1-5.png",
  },
 
 {
    keyword: "FURLA/芙拉女款 红色印花牛皮手提包单",
    price: "￥1980",
    src: "./img/1-4.png",
  },
  {
    keyword: "COACH 女士手提单肩包 黑色 均码",
    price: "￥2590",
    src: "./img/1-5.png",
  }, {
    keyword: "男士护肤品套装化妆品补水保湿控油",
    price: "￥69",
    src: "./img/1-2.png",
  },{
    keyword: "COACH/蔻驰2019专柜新款铆钉风琴拼皮",
    price: "￥3399",
    src: "./img/1-3.png",
  },
];
//获取goods3的类名 和图片 平且将其转为数组
var goodsList3 = Array.from(document.querySelectorAll(".goods3 img")),
  goodsP3 = Array.from(document.querySelectorAll(".goods3 p")),
  goodsB3 = Array.from(document.querySelectorAll(".goods3 b"));
//第4列商品列表数据
var goods4data = [
  {
    keyword: "金河田智能芯480GT台式机电脑主机箱",
    price: "￥129",
    src: "./img/1-6.jpg",
  },
  {
    keyword: "Seagate/希捷 st2000dm005 2Tb酷",
    price: "￥365",
    src: "./img/1-7.jpg",
  },
  {
    keyword: "日本SANWA无线鼠标大尺寸人体工学蓝",
    price: "￥89",
    src: "./img/1-8.jpg",
  },
  {
    keyword: "lotoo乐图2017版 PAW GOLD 保护套",
    price: "￥380",
    src: "./img/1-9.jpg",
  },
  {
    keyword: "联想ThinkPad T490 英特尔十代酷睿",
    price: "￥7799",
    src: "./img/1-10.jpg",
  },
  {
    keyword: "纽曼H1扩音器教师用",
    price: "￥89",
    src: "./img/1-11.jpg",
  },
  {
    keyword: "魅声Y1耳机有线黑色耳麦电脑手机K歌",
    price: "￥99",
    src: "./img/1-12.jpg",
  },
  {
    keyword: "蓝牙升级线mmcx/IE40PRO",
    price: "￥189",
    src: "./img/1-13.jpg",
  },
];
//获取goods4的类名 和图片 平且将其转为数组
var goodsList4 = Array.from(document.querySelectorAll(".goods4 img")),
  goodsP4 = Array.from(document.querySelectorAll(".goods4 p")),
  goodsB4 = Array.from(document.querySelectorAll(".goods4 b"));
var nav;
init();
function init() {
  nav = document.querySelector(".nav");
  createCarouselImg();
  createNav();
  creategoods1();
  creategoods2();
  creategoods3();
  creategoods4();
}
/* 创建商品分类导航 */
function createNav() {
  navList.forEach(function (item, index) {
    var li = Utils.ce("li", {
      width: "250px",
      height: "39px",
      fontSize: "18px",
      lineHeight: "39px",  
    });
    var span = Utils.ce("span", {
      fontSize: "20px",
      color: "#FBD8D8",   
    });
    var a = Utils.ce("a", {
      color: "#fff",
      display: "block",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "530",
    });
    li.addEventListener("mouseenter", randomColor);
    li.addEventListener("mouseleave", randomColor);
    li.textContent = item;
    span.className = "iconfont";
    span.innerHTML = iconList[index];
    li.insertBefore(span, li.firstChild);
    a.appendChild(li);
    nav.appendChild(a);
  });
}
//随机颜色
function randomColor(e) {
  if (e.type === "mouseenter") {
    this.style.color =
      "#" +
      Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0");
  } else {
    this.style.color = "#fff";
  }
}
//创建背景图
function createCarouselImg() {
  carouselImgList.forEach(function (item, index) {
    item.src = carouselImgSrc[index];
  });
}
function creategoods1() {
  //循环遍历
  goodsList1.forEach(function (item, index) {
    //src 等于
    item.src = `./img/logos${index + 1}.png`;
  });
}
function creategoods2() {
  goodsList2.forEach(function (item, index) {
    item.src = `./img/10${index}.jpg`;
  });
}

function creategoods3() {
  //循环遍历
  goods3data.forEach(function (item, index) {
    //goodsList3数组中index+1 等于src
    goodsList3[index + 1].src = item["src"];
    goodsP3[index].textContent = item["keyword"];
    goodsB3[index].textContent = item["price"];
  });
}
function creategoods4() {
  goods4data.forEach(function (item, index) {
    goodsList4[index + 1].src = item["src"];
    goodsP4[index].textContent = item["keyword"];
    goodsB4[index].textContent = item["price"];
  });
}
