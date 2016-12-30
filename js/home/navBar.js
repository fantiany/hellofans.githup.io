/**
 * Created by Administrator on 2016/12/26 0026.
 */
(function () {

    function NavBar(url,superView,getItemsCallback) {

        this.superView = superView;

        this.showNavBar(url,getItemsCallback);

        this.items = [];
        HTTPClient.call(this);
    }
    NavBar.prototype = new HTTPClient();
    NavBar.prototype.showNavBar = function (url,getItemsCallback) {
        this.navBar = $("<ul class='nav-container'></ul>");
        this.superView.append(this.navBar);
        var self = this;
        this.getJson(url,function (result) {
            if (!result){
                console.log("没有获得到数据");
                return;
            }
            var dataList = $($.parseJSON(result));
            dataList.each(function () {

                var item = new NavBarItem(this);
                self.navBar.append(item.li);

                self.items.push(item);

            });
            if (getItemsCallback){

                getItemsCallback(self.items);

            }

        });

    };



    //创建  导航栏 里面元素的类
    function NavBarItem(info) {
        this.info = info;

        this.li = $("<li>"+info.className+"</li>");
    }

    window.NavBarItem = NavBarItem;
    window.NavBar = NavBar;
})();