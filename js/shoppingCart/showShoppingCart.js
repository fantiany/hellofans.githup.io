/**
 * Created by a on 2016/12/29.
 */
(function () {
    function init() {
        var string = location.search.replace("?","");
        console.log(string);
        var mainshoppingView = $(".showshoppingView");
        new ShowShoppingView("http://datainfo.duapp.com/shopdata/getCar.php",string,mainshoppingView);
        $("#toindex").click(function () {
            window.history.back(-1);
        });
    }
    init();
})();