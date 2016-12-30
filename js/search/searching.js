/**
 * Created by wst on 2016/12/30.
 */
(function () {
    function Search() {
     this.searching();
    }
    Search.prototype=new HTTPRequest();
    Search.prototype.searching=function () {

        var self=this;
        var button=$(".searchBth");
        button.click(function () {
            console.log(1);
            var text=$(".searchInput").val();
            var selectText="http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText="+encodeURI(encodeURI(text));
            self.getJsonp(selectText,function (result) {

                if(result.length==0){
                    $(".allSearchitem").html("很抱歉，没有该商品！")
                }else{
                    $(".allSearchitem").html("")
                }
                console.log(result);
                if($(".SearchItem")){
                    $(".SearchItem").remove();
                }

                result.each(function () {
                   var div=$("<div class='SearchItem'></div>");
                   div.append($("<img src='"+this.goodsListImg+"'/>"));
                   div.append($("<p>"+this.goodsName+"</p>"));
                   div.append($("<span>￥"+this.price+"</span>"));
                   $(".allSearchitem").append(div);
                });
            })

        });
    };
    Search.prototype.searchJump=function (value) {
        var self=this;
        var selectText="http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText="+value;
        self.getJsonp(selectText,function (result) {
            if(result.length==0){
                $(".allSearchitem").html("很抱歉，没有该商品！")
            }else{
                $(".allSearchitem").html("")
            }
            console.log(result);
            result.each(function () {
                var div=$("<div class='SearchItem'></div>");
                div.append($("<a><img src='"+this.goodsListImg+"'/></a>"));
                div.append($("<p>"+this.goodsName+"</p>"));
                div.append($("<span>￥"+this.price+"</span>"));
                $(".allSearchitem").append(div);
            });
        })
    };

    window.Search=Search;
})();