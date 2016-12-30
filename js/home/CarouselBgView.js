/**
 * Created by a on 2016/12/22.
 */
(function () {
   function CarouselView(url,superView,getItemsCallback) {
       this.superView = superView;
       this.getimages(url,getItemsCallback);
       this.arr2 = [];
   }

   CarouselView.prototype = new HTTPClient();
   //CarouselView.prototype = new CarouselView();
   CarouselView.prototype.getimages = function (url,getItemsCallback) {
        var self = this;
       this.getJsonpTo(url,function (result) {
            //var imgurl = $(result[0]);
            for(var i=0;i<=result.length-1;i++){
                var imgurl = $(result[i]);
                //console.log(imgurl[0].goodsBenUrl);
                var arr = imgurl[0].goodsBenUrl.slice(1,imgurl[0].goodsBenUrl.length-2).split(',');
                var item = arr[0];
                self.arr2.push(item);

            }
           if(getItemsCallback){

               getItemsCallback(self.arr2);
           }
        })
   };


    window.CarouselView =CarouselView;
})();