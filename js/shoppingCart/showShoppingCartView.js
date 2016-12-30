/**
 * Created by a on 2016/12/29.
 */
(function () {
    function ShowShoppingView(url,userID,superView) {
        this.superView = superView;
        this.showshopping(url,userID,superView);
    }
    ShowShoppingView.prototype = new HTTPClient();
    ShowShoppingView.prototype.showshopping = function (url,userID,superView) {
        this.getJsonp(url,{userID:userID},function (result) {
            console.log(result);
            new CreateShoppingView(result,superView);
        })
    };
    function CreateShoppingView(info,superView) {
        this.showView(info,superView)
    }
    CreateShoppingView.prototype.showView = function (info,superView) {

        $(info).each(function () {
            var self = $(this);
            var price2 = this.discount;
            if(price2 == 0){
               price2 = this.price
            }else {
                price2 = parseFloat((this.discount*this.price)/10,1);
            }

            var p = $("<p class='showshopping'><input type='checkbox' class='otherInput'><img src="+this.goodsListImg+"><sapn class='goodsName'>"+this.goodsName+"</sapn><span class='price'>"+"￥"+parseInt(this.price)+"</span><span class='number2'>"+this.number+"</span><span class='discount'>"+price2+"</span><button class='remove2'>删除</button></p>");
            superView.append(p);
            $(".remove2").click(function () {
                $(this).parent().remove(this.superView);
            });
            $(".all").bind("click",function () {
                selectAll();

            });
            $(".allremove2").click(function () {
                p.remove(this.superView);
            });
            // 全选按钮选中标志
            var checkflag = "false";
            // 全选功能
            function selectAll(){
                var field = $(".all");
                // 如果全选按钮状态是未选中
                if (checkflag == "false"){
                    $(".otherInput").attr("checked", true);
                    // 更改全选按钮选中标志
                    checkflag = "true";
                }else{
                    $(".otherInput").attr("checked",false);
                    // 更改全选按钮选中标志
                    checkflag = "false";
                }
            }

        });

    };
    window.ShowShoppingView = ShowShoppingView;
})();