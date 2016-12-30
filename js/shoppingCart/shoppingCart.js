/**
 * Created by a on 2016/12/28.
 */
(function () {
    function ShoppingCart(url,data,superView) {
        this.superView =superView;
        this.showCart(url,data,superView);

    }
    ShoppingCart.prototype = new HTTPClient();
    ShoppingCart.prototype.showCart = function (url,data,superView) {
        this.getJsonTo(url,data,function (result) {
            console.log(result);
        });
    };
    function ShoppingCartView(url,id,superView) {
           this.createCartView(url,id,superView)
    }
    ShoppingCartView.prototype = new HTTPClient();
    ShoppingCartView.prototype.createCartView = function (url,id,superView) {
        this.getJsonp(url,{goodsID:id},function (result) {
            console.log(result);
            new CreatshoppingView(result[0],superView);
        })

    };
    function CreatshoppingView(info,superView) {
        this.cartView(info,superView);
    }
    CreatshoppingView.prototype.cartView = function (info,superView) {
        var goodsListImg = info.goodsListImg;
        var goodsName = info.goodsName;
        var price = info.price;
        var p = $("<p class='cartContext'><input type='checkbox' ><img src="+goodsListImg+"><span>"+goodsName+"</span><span class='price'>"+"￥"+price+"</span><input class='num' value='1' min='1' type='number'><span class='price price2'>"+"￥"+price+"</span><button class='button'>删除</button><a href='#' class='play'>去付款</a></p>");

        superView.append(p);

        $(".button").click(function () {
           p.remove(this.superView);
        });


    };
    window.ShoppingCart = ShoppingCart;
    window.ShoppingCartView = ShoppingCartView;
})();