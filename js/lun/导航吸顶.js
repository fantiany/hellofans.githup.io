/**
 * Created by Administrator on 2016/12/27 0027.
 */
(function () {
    var xiding = $(".navBar");
    $(document).on("scroll",function(){
        var self = $(this);
        var st = self.scrollTop();
        if(st>200){
            xiding.css({position:"fixed",top:"-20px"});
        }  else {
            xiding.css({position:"relative",top:"0"});
        }
    });
})();