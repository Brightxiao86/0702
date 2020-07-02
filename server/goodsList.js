module.exports = (function () {
    //创建数组
    var goodsList = [];
    //返回 
    return function (str, goodsdata, res) {
        //把引入的数值转为对象
        //JSON.parse() 方法用于将一个 JSON 字符串转换为对象
        var obj = JSON.parse(str);
        //把对象用=分割
        obj = obj.split("=")[1];
        //查找goodsdata的数值 并且赋值给data
        var data = goodsdata.filter(function (item) {
            //返回
            return item.id === obj;
        })
        //创建一个对象
        var newdata = {};
        //获取id  如1001
        newdata.id = data[0].id;
        //获取常规图片
        newdata.imgsrc = data[0].src["medium"][0];
        //获取产品名称
        newdata.keyword = data[0].title;
        //获取价格
        newdata.price = data[0].price;
        newdata.older = data[0].price;
        newdata.num = 1;
        newdata.selected = false;
      var bool= goodsList.some(function (item) {
            return item.id===newdata.id;
        })
        //如果为真实是就把newdata添加到goodlist种
        if(!bool) goodsList.push(newdata);
        console.log(newdata);
        //JSON.stringify()将对象转换为 JSON 字符串。
        res.write(JSON.stringify(goodsList));
        //返回数据
        res.end();
    }
})()