/**
 * Created by wst on 2016/12/22.
 */

(function () {
      function HTTPRequest(url,callback) {

      }
    
     HTTPRequest.prototype.getJson=function (url,callback) {
            $.get({url:url}).done(function (result) {
                var list=$($.parseJSON(result));
                if(callback){
                    callback(list);
                }
            })
     };
    HTTPRequest.prototype.getJsonp=function (url,callback) {
           $.get({url:url,dataType:"jsonp"}).done(function (result) {
                   var list=$(result);
                  if (callback){
                      callback(list);
                  }
           });
    };
    HTTPRequest.prototype.postJson=function (url,data,callback) {
        $.post({url:url,dataType:"json",data:data}).done(function (result) {
            if (callback){
                callback(result);
            }

        });

    };
      window.HTTPRequest=HTTPRequest;
    
})();