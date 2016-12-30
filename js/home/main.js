/**
 * Created by Administrator on 2016/12/21 0021.
 */
(function () {
    function init() {
        var navContext = $(".navContainer");
        var carousel = $(".Carousel");
        var user = location.search.replace("?","");
        if(user){
            $(".top-container-a1").text("用户："+user);
        }else {
            $(".top-container-a1").text("登录/免费注册");
        }
        if (user.length == 31){
            $(".top-container-a1").text("登录/免费注册");
        }
        showContent("1");
        new NavBar("http://datainfo.duapp.com/shopdata/getclass.php",
            $(".navBar"),function (items) {
                $(items).each(function () {
                    var self = this;
                    this.li.click(function () {
                        showContent(self.info.classID);
                    });
                });
            });
        function showContent(classID) {
            new GoodsListView("http://datainfo.duapp.com/shopdata/getGoods.php",
                {classID:classID},$(".main-container"));
        }
        new CarouselView("http://datainfo.duapp.com/shopdata/getBanner.php",carousel,function (arr2) {
            new _.CarouselView(arr2,document.querySelector(".Carousel")).showFirstPage(0);
        });
    }
    init();
})();