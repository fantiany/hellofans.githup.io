/**
 * Created by a on 2016/12/27.
 */
(function () {
    function init() {
        var string = location.search.replace("?","");
        console.log(string);
        var string2 = string.split("&");
        var mainshoppingView = $(".mainshoppingView");
        new ShoppingCart("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:string2[1],goodsID:string2[0]},mainshoppingView);

        new ShoppingCartView("http://datainfo.duapp.com/shopdata/getGoods.php",string2[0],mainshoppingView);
        console.log(string2[0]);
        $("#toindex2").click(function () {
            window.history.back(-1);
        });
    }
    init();

})();