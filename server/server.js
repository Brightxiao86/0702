var http = require("http");
var query = require("querystring");
var userList = [{ user: "xiaoming", password: "QWEr23456789" }];
var goodsdata = [
  {
    id: "1001",
    src: {
      medium: [
        "1001-1.jpg",
        "1001-2.jpg",
        "1001-3.jpg",
        "1001-4.jpg",
        "1001-5.jpg",
      ],
      mini: [
        "1001-1-1.jpg",
        "1001-1-2.jpg",
        "1001-1-3.jpg",
        "1001-1-4.jpg",
        "1001-1-5.jpg",
      ],
      max: [
        "1001-2-1.jpg",
        "1001-2-2.jpg",
        "1001-2-3.jpg",
        "1001-2-4.jpg",
        "1001-2-5.jpg",
      ],
    },
    price: "￥179.00",
    star: [4.8, 4.8, 4.8],
    name: "李医生百臻专卖店",
    nav: [
      "首页",
      "所有宝贝",
      "型男护肤",
      "T恤",
      "专去黑头",
      "控油",
      "祛痘",
      "祛印",
      "面膜",
    ],
    navbj: "#6cd6d2",
    title: "李医生男士护肤品套装化妆品补水保湿控油去黑头洗面奶爽肤水",
    estimate: [2, 112],
    color: ["color1001-1.jpg"],
    size: ["o ", "t", "th", "Xf"],
  },
  {
    id: "1004",
    src: {
      medium: [
        "1002-1.jpg",
        "1002-2.jpg",
        "1002-3.jpg",
        "1002-4.jpg",
        "1002-5.jpg",
      ],
      mini: [
        "1002-1-1.jpg",
        "1002-1-2.jpg",
        "1002-1-3.jpg",
        "1002-1-4.jpg",
        "1002-1-5.jpg",
      ],
      max: [
        "1002-2-1.jpg",
        "1002-2-2.jpg",
        "1002-2-3.jpg",
        "1002-2-4.jpg",
        "1002-2-5.jpg",
      ],
    },
    price: "￥2590.00",
    star: [4.8, 4.8, 4.8],
    name: "波司登绿果专卖店",
    nav: [
      "首页",
      "奢侈大牌",
      "国货潮牌",
      "王府井严选",
      "童装童鞋",
      "服饰内衣",
      "干货杂粮",
      "家居百货",
      "商务办公",
      "美妆护发",
    ],
    navbj: "#c9c9c9",
    title: "COACH 女士手提单肩包 黑色 均码 57124",
    estimate: [2, 1175],
    color: ["color1002-1.jpg", "color1002-2.jpg", "color1002-3.jpg"],
  },
  {
    id: "1002",
    src: {
      medium: [
        "1003-1.jpg",
        "1003-2.jpg",
        "1003-3.jpg",
        "1003-4.jpg",
        "1003-5.jpg",
      ],
      mini: [
        "1003-1-1.jpg",
        "1003-1-2.jpg",
        "1003-1-3.jpg",
        "1003-1-4.jpg",
        "1003-1-5.jpg",
      ],
      max: [
        "1003-2-1.jpg",
        "1003-2-2.jpg",
        "1003-2-3.jpg",
        "1003-2-4.jpg",
        "1003-2-5.jpg",
      ],
    },
    price: "￥3578.00",
    star: [4.8, 4.8, 4.8],
    name: "客邻尚品官方旗舰店",
    nav: [
      "首页有惊喜",
      "所有宝贝",
      "COACH",
      "Michael Kors",
      "FURLA",
      "时尚女包",
      "大牌男士",
      "品质服装",
      "微瑕特惠",
      "会员制度",
    ],
    navbj: "#999",
    title: "COACH/蔻驰2019专柜新款铆钉风琴拼皮信封包女士单肩斜挎包 25491",
    estimate: [0, 1789],
    color: ["color1003-1.jpg"],
  },
  {
    id: "1003",
    src: {
      medium: [
        "1004-1.jpg",
        "1004-2.jpg",
        "1004-3.jpg",
        "1004-4.jpg",
        "1004-5.jpg",
      ],
      mini: [
        "1004-1-1.jpg",
        "1004-1-2.jpg",
        "1004-1-3.jpg",
        "1004-1-4.jpg",
        "1004-1-5.jpg",
      ],
      max: [
        "1004-2-1.jpg",
        "1004-2-2.jpg",
        "1004-2-3.jpg",
        "1004-2-4.jpg",
        "1004-2-5.jpg",
      ],
    },
    price: "¥ 1980.00",
    star: [4.8, 4.8, 4.8],
    name: "客邻尚品官方旗舰店",
    nav: [
      "本店所有商品",
      "首页",
      "大牌奢品",
      "FENDI",
      "FERRAGAMO",
      "MK清仓",
      "MOSCHINO",
      "VERSACE",
    ],
    navbj: "#999",
    title: "FURLA/芙拉女款 红色印花牛皮手提包单肩包斜挎包 BHV7女包小方包",
    estimate: [1, 990],
    color: [
      "color1004-1.jpg",
      "color1004-2.jpg",
      "color1004-3.jpg",
      "color1004-4.jpg",
    ],
  },
  {
    id: "1005",
    src: {
      medium: [
        "1005-1.jpg",
        "1005-2.jpg",
        "1005-3.jpg",
        "1005-4.jpg",
        "1005-5.jpg",
      ],
      mini: [
        "1005-1-1.jpg",
        "1005-1-2.jpg",
        "1005-1-3.jpg",
        "1005-1-4.jpg",
        "1005-1-5.jpg",
      ],
      max: [
        "1005-2-1.jpg",
        "1005-2-2.jpg",
        "1005-2-3.jpg",
        "1005-2-4.jpg",
        "1005-2-5.jpg",
      ],
    },
    price: "¥ 129.00",
    star: [4.7, 4.7, 4.7],
    name: "涛之歌数码专营店",
    nav: [
      "本店所有商品",
      "首页",
      "大牌奢品",
      "FENDI",
      "FERRAGAMO",
      "MK清仓",
      "MOSCHINO",
      "VERSACE",
    ],
    navbj: "#999",
    title: "金河田智能芯480GT台式机电脑主机箱电源峰值400W额定300w静音",
    estimate: [1, 990],
    color: ["color1005-1.jpg"],
  },
  {
    id: "1006",
    src: {
      medium: [
        "1006-1.jpg",
        "1006-2.jpg",
        "1006-3.jpg",
        "1006-4.jpg",
        "1006-5.jpg",
      ],
      mini: [
        "1006-1-1.jpg",
        "1006-1-2.jpg",
        "1006-1-3.jpg",
        "1006-1-4.jpg",
        "1006-1-5.jpg",
      ],
      max: [
        "1006-2-1.jpg",
        "1006-2-2.jpg",
        "1006-2-3.jpg",
        "1006-2-4.jpg",
        "1006-2-5.jpg",
      ],
    },
    price: "¥365.00",
    star: [4.8, 4.8, 4.8],
    name: "中阳盈通数码专营店",
    nav: [
      "全部商品",
      "首页",
      "机械硬盘",
      "固态硬盘",
      "台式机内存",
      "笔记本内存",
      "服务器内存",
      "移动硬盘",
      "U盘存储",
      "安装指导",
    ],
    navbj: "#999",
    title: "Seagate/希捷酷鱼2T硬盘 st2000dm005 台式机机械硬盘2TB 3.5寸",
    estimate: [1, 49],
    color: ["color1006-1.jpg"],
  },
  {
    id: "1007",
    src: {
      medium: [
        "1007-1.jpg",
        "1007-2.jpg",
        "1007-3.jpg",
        "1007-4.jpg",
        "1007-5.jpg",
      ],
      mini: [
        "1007-1-1.jpg",
        "1007-1-2.jpg",
        "1007-1-3.jpg",
        "1007-1-4.jpg",
        "1007-1-5.jpg",
      ],
      max: [
        "1007-2-1.jpg",
        "1007-2-2.jpg",
        "1007-2-3.jpg",
        "1007-2-4.jpg",
        "1007-2-5.jpg",
      ],
    },
    price: "¥ 99.00-159.00",
    star: [4.9, 4.9, 4.9],
    name: "sanwasupply旗舰店",
    nav: [
      "首页",
      "电脑包",
      "鼠标",
      "光盘包",
      "集线器",
      "键鼠专区",
      "麦克耳机",
      "线材",
      "清洁产品",
      "电脑椅",
      "电脑桌",
    ],
    navbj: "#000",
    title: "日本SANWA无线鼠标大尺寸人体工学蓝牙usb电脑直立竖握式男女滑鼠",
    estimate: [3403, 9],
    color: ["color1007-1.jpg", "color1007-2.jpg", "color1007-3.jpg"],
  },
  {
    id: "1008",
    src: {
      medium: [
        "1008-1.jpg",
        "1008-2.jpg",
        "1008-3.jpg",
        "1008-4.jpg",
        "1008-5.jpg",
      ],
      mini: [
        "1008-1-1.jpg",
        "1008-1-2.jpg",
        "1008-1-3.jpg",
        "1008-1-4.jpg",
        "1008-1-5.jpg",
      ],
      max: [
        "1008-2-1.jpg",
        "1008-2-2.jpg",
        "1008-2-3.jpg",
        "1008-2-4.jpg",
        "1008-2-5.jpg",
      ],
    },
    price: "¥ 99.00-159.00",
    star: [4.9, 4.9, 4.9],
    name: "lotoo数码旗舰店",
    nav: [
      "新品首发",
      "本店所有商品",
      "首页",
      "HIFI播放器",
      "专业录音笔",
      "Lotoo配件",
    ],
    navbj: "#999",
    title: "lotoo乐图2017版PAW GOLD保护套 新金菊花保护套老款通用",
    estimate: [49, 38],
    color: ["color1008-1.jpg"],
  },
  {
    id: "1009",
    src: {
      medium: [
        "1009-1.jpg",
        "1009-2.jpg",
        "1009-3.jpg",
        "1009-4.jpg",
        "1009-5.jpg",
      ],
      mini: [
        "1009-1-1.jpg",
        "1009-1-2.jpg",
        "1009-1-3.jpg",
        "1009-1-4.jpg",
        "1009-1-5.jpg",
      ],
      max: [
        "1009-2-1.jpg",
        "1009-2-2.jpg",
        "1009-2-3.jpg",
        "1009-2-4.jpg",
        "1009-2-5.jpg",
      ],
    },
    price: "¥ 7499.00",
    star: [4.8, 4.8, 4.8],
    name: "thinkpad芯可专卖店",
    nav: ["首页", "所有分类", "新机技巧", "授权资质", "品牌故事"],
    navbj: "#ccc",
    title: "联想ThinkPad T490 英特尔十代酷睿 IPS 1080高清四核高性能高端笔记本",
    estimate: [51, 79],
    color: ["1009-1.jpg"],
  },
  {
    id: "1010",
    src: {
      medium: [
        "1010-1.jpg",
        "1010-2.jpg",
        "1010-3.jpg",
        "1010-4.jpg",
        "1010-5.jpg",
      ],
      mini: [
        "1010-1-1.jpg",
        "1010-1-2.jpg",
        "1010-1-3.jpg",
        "1010-1-4.jpg",
        "1010-1-5.jpg",
      ],
      max: [
        "1010-2-1.jpg",
        "1010-2-2.jpg",
        "1010-2-3.jpg",
        "1010-2-4.jpg",
        "1010-2-5.jpg",
      ],
    },
    price: "¥ 89.00 ",
    star: [4.8, 4.8, 4.8],
    name: "科潮数码专营店",
    nav: [
      "首页",
      "所有分类",
      "复读机",
      "英语听力",
      "蓝牙耳机",
      "蓝牙音箱",
      "线控蓝牙",
      "数码配件",
    ],
    navbj: "#ccc",
    title: "纽曼H1扩音器教师用小蜜蜂便携式领夹麦讲课上课宝无线耳麦",
    estimate: [1, 179],
    color: ["1010-1.jpg"],
  },
  {
    id: "1011",
    src: {
      medium: [
        "1011-1.jpg",
        "1011-2.jpg",
        "1011-3.jpg",
        "1011-4.jpg",
        "1011-5.jpg",
      ],
      mini: [
        "1011-1-1.jpg",
        "1011-1-2.jpg",
        "1011-1-3.jpg",
        "1011-1-4.jpg",
        "1011-1-5.jpg",
      ],
      max: [
        "1011-2-1.jpg",
        "1011-2-2.jpg",
        "1011-2-3.jpg",
        "1011-2-4.jpg",
        "1011-2-5.jpg",
      ],
    },
    price: "¥ 99.00 ",
    star: [4.8, 4.8, 4.8],
    name: "团聚众数码专营店",
    nav: [
      "首页",
      "所有分类",
      "k歌套装",
      "外置声卡",
      "品耳麦专区",
      "麦克风专区",
    ],
    navbj: "#DADBDD",
    title: "魅声Y1耳机有线黑色监听耳麦电脑手机K歌主播直播唱歌",
    estimate: [1, 28],
    color: ["1011-3.jpg"],
  },
  {
    id: "1012",
    src: {
      medium: [
        "1012-1.jpg",
        "1012-2.jpg",
        "1012-3.jpg",
        "1012-4.jpg",
        "1012-5.jpg",
      ],
      mini: [
        "1012-1-1.jpg",
        "1012-1-2.jpg",
        "1012-1-3.jpg",
        "1012-1-4.jpg",
        "1012-1-5.jpg",
      ],
      max: [
        "1012-2-1.jpg",
        "1012-2-2.jpg",
        "1012-2-3.jpg",
        "1012-2-4.jpg",
        "1012-2-5.jpg",
      ],
    },
    price: "¥ 189.00 ",
    star: [4.8, 4.8, 4.8],
    name: "上海阳晓数码专营店",
    nav: [
      " 本店所有商品",
      "首页",
      "蓝牙耳机",
      "便携音箱",
      "入耳耳机",
      "爆款推荐",
      "魅力新品",
    ],
    navbj: "#B6DBFD",
    title:
      "蓝牙升级线mmcx/IE40PRO/0.78MM/IM70/LDAC/索尼森海塞尔ie80s舒尔SE846蓝牙耳机升级线",
    estimate: [24, 29],
    color: ["1012-2.jpg"],
  },
];
function createServers(route) {
  var server = http.createServer(function (req, res) {
      var str = "";
      req.on("data", function (_data) {
          str = _data.toString();
      });
      req.on("end", function () {
          res.writeHead(200, {
              "content-type": "text/html;charset=utf-8",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Origin": "*"
          })
          var type = req.url.slice(1);
          switch (type) {
              case "signUp":
                  route.signUp(str, res, userList);
                  break;
              case "signIn":
                  route.signIn(str, res, userList);
                  break;
              case "id":
                  route.details(str, goodsdata, res);
                  break;
              case "goodsList":
                  route.goodsList(str, goodsdata, res);
                  break;
          }
      })
  })
  server.listen(8000, "localhost", function () {
      console.log("开启了服务");
  })
}
module.exports = createServers;
