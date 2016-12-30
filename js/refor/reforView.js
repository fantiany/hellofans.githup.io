/**
 * Created by Administrator on 2016/12/30 0030.
 */
(function () {
    function Refor(url,data,superView,callBack) {
        this.showRefor(url,data,superView,callBack);
    }
    Refor.prototype = new HTTPClient();
    Refor.prototype.showRefor = function (url,
                                                data,superView,callBack) {
        this.getJsonTo(url,data,function (result) {
            console.log(result);
            if(callBack){
                callBack(result);
            }
        });
    };
    window.Refor = Refor;
})();