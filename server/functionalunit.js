      var topBn;
      var bool = false;

      init();
      function init() {
        //获取标签
        topBn = document.querySelector(".attached-search-warp");
        //页面滚动条滚动事件
        window.onscroll = scrollHandler;
        //每16秒执行一次
        setInterval(enterFrame, 16);
      }
      //设置开关
      function clickHandler() {
        bool = true;
      }
      //设置页面滚动条滚动的样式
      function scrollHandler() {
        if (
          //documentElement 属性以一个元素对象返回一个文档的文档元素
          //获取滚动条位置  当滚动去距离大于网页可视的高度  那么导航栏就会显示
          //否则就会隐藏
          document.documentElement.scrollTop >
          document.documentElement.clientHeight
        ) {
          //显示
          topBn.style.display = "block";
        } else {
          //隐藏
          topBn.style.display = "none";
        }
      }
      //设置事件
      function enterFrame() {
        //当bool为真实时  就跳出
        if (!bool) return;
        document.documentElement.scrollTop -= 100;
        if (document.documentElement.scrollTop === 0) {
          bool = false;
        }
      }