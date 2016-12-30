/**
 * Created by Administrator on 2016/12/22 0022.
 */
(function () {
    function HTTPClient() {

    }

    HTTPClient.prototype.getJson=function (url,callback) {
           $.get(url).done(function (result) {
               if (callback){
                   callback(result);
               }
           });
    };
    HTTPClient.prototype.getJsonp=function (url,data,callback) {
        $.post({url:url,dataType:"jsonp",data:data}).done(function (result) {
            if (callback){
                callback(result);
            }
        });
    };
    HTTPClient.prototype.getJsonpTo =function (url,callBack) {
        $.get({url:url,dataType:"jsonp"}).done(function (result) {
            if (callBack){
                callBack(result);
            }

        });
    };
    HTTPClient.prototype.getJsonTo =function (url,data,callBack) {
        $.post({url:url,dataType:"json",data:data}).done(function (result) {
            if (callBack){
                callBack(result);
            }
        });
    };
    window.HTTPClient=HTTPClient;
})();