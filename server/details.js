module.exports = (function () {
  //返回 函数
  return function (str, goodsdata, res) {
    //查找goodlist
    var arr = goodsdata.filter(function (item, index) {
      //把JSON字符串 转为对象
      var obj = JSON.parse(str);
      // console.log(obj.split("=")[1]);
      //返回
      return item["id"] === obj.split("=")[1];
    });
    // console.log(arr);
    //将对象转换为字符串
    res.write(JSON.stringify(arr));
    //返回数据
    res.end();
  };
})();




