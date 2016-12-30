/**
 * Created by Administrator on 2016/12/22 0022.
 */
(function () {

    function init() {
        var goodsID=location.search.replace("?","");
        var string= goodsID.split("&");
        new GoodsView("http://datainfo.duapp.com/shopdata/getGoods.php",
            string[0],$(".goods-container"))

    }

    init();
})();
