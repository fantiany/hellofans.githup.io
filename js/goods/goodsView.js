/**
 * Created by Administrator on 2016/12/22 0022.
 */
(function () {
    function GoodsView(url,id,superView) {
        this.showGoods(url,id,superView);
    }
    GoodsView.prototype = new HTTPClient();
    GoodsView.prototype.showGoods = function (url,id,superView) {

        var self=this;
        this.getJsonp(url,{goodsID:id},function (result){
            console.log(result);
            self.createView(result[0],superView);
        });

    };

    GoodsView.prototype.createView=function (info,superView) {
       console.log(info);
        var goodes=$(".goodes-container");
        var gooded=$(".gooded-container");
        var string = info.imgsUrl;
        var goodsListImg = info.goodsListImg;
        var goodsBenUrl =info.goodsBenUrl;
        var goodsID = info.goodsID;
        var detail = info.detail.split(/[。/；，,]/);
        console.log(detail);
        var images=string.slice(2,info.imgsUrl.length-2).split("\",\"");
        var goodsListImg2 = goodsListImg.slice(0,info.imgsUrl.length-2).split("\",\"");
        var goodsBenUrl2 =goodsBenUrl.slice(2,info.goodsBenUrl.length-2).split("\",\"");
        console.log(images);
        console.log(goodsListImg2);
        console.log(goodsBenUrl2);
        var goodsName = info.goodsName;
        var className = info.className;
        var buynumber=info.buynumber;
        var price = info.price;
        var discount =info.discount;
        var prices=Math.round(price*discount*10)/ 100;
        var imgView=$("<img src="+images[0]+">");
        goodes.append(imgView);
            var list1=$("<ul class='list-one'></ul>");
             var imgListView=$("<li class='LL1'><img height='80px' src="+images[0]+"></li>" +
                 "<li class='LL2'><img height='80px' src="+images[1]+"></li>"+
                 "<li class='LL3'><img height='80px' src="+images[2]+"></li>"+
                 "<li class='LL4'><img height='80px' src="+images[3]+"></li>");
             list1.append(imgListView);
             gooded.append(list1);
        $(".LL1").hover(function () {
            goodes.html("<img src="+images[0]+">");
        });
        $(".LL2").hover(function () {
            goodes.html("<img src="+images[1]+">");
        });
        $(".LL3").hover(function () {
            goodes.html("<img src="+images[2]+">");
        });
        $(".LL4").hover(function () {
            goodes.html("<img src="+images[3]+">");
        });
        var detail1=$(".detail1");
        var detail1View=$("<h3>"+goodsName+"</h3>")
        detail1.html(detail1View);
        var detailtwo=$(".detail2-two");
        var detailtwoView=$("<span>价格<span class='jias'>￥<b class='jia'>"+price+"</b></span></span>")
        detailtwo.html(detailtwoView);
        var detailthree=$(".detail2-three");
        var detailthreeView=$("<span>促销价<b class='cu'>￥"+prices+"</b></span>");
        detailthree.html(detailthreeView);
        var detail3=$(".detail3-one");
        var detail3View=$("<ul><li>月销量:<span>"+buynumber+"</span></li><li>累计评价:<span>"+buynumber+"</span></li></ul>");
        detail3.html(detail3View);
        var wans=$(".wan-bottom");
        var wanss=$("<ul class='wanss'></ul>");
        wans.append(wanss);
        $(detail).each(function () {
           var waned=$("<li class='waned'>"+this+"</li>");
            wanss.append(waned);
        });
        var footer=$(".footer");
        $(goodsBenUrl2).each(function () {
            var imagesbgs=$("<ul class='imageB'></ul>");
            var imagesbg = $("<li class='imagebg1'><img src="+this+"></li>");
            imagesbgs.append(imagesbg);
            footer.append(imagesbgs);
        });
        $(images).each(function () {
            var imagesbgs1=$("<ul class='imageB1'></ul>");
            var imagesbg1 = $("<li class='imagebg2'><img src="+this+"></li>");
            imagesbgs1.append(imagesbg1);
            footer.append(imagesbgs1);
        });
        $(".che").click(function () {
            window.location.reload();
        });
        $(".gou").click(function () {
            var string = location.search.replace("?","");
            var string2= string.split("&");
                window.location.href='../html/gouwuche.html?'+string;

        });

    };

    window.GoodsView=GoodsView;
})();