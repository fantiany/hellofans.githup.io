/**
 * Created by liuyujing on 2016/11/17.
 */

window.animte = window.animte||{};

(function () {
    function Animation(_width) {
        this.width = _width;
    }
    Animation.prototype.move = function (duration,fromX,toX,element,callback) {
        var fps = 40;
        var frameDuration = Math.round(1000/fps);
        var frames = Math.round(duration/frameDuration);
        var frameIndex = 0;
        var x = fromX;
        var speed = (toX-fromX)/frames;
        var timer = setInterval(function () {
                ++frameIndex;
                x += speed;
                if (frameIndex == frames) {
                    clearInterval(timer);
                    x = toX;

                    if (callback){
                        callback();
                    }
                }

                element.style.left = x+"px";
            }
            ,frameDuration);
    };
    Animation.prototype.moveOutToLeft = function (element,callback) {
        this.move(1000,0,-this.width,element,callback);
    };
    Animation.prototype.moveInFromLeft = function (element,callback) {
        element.style.left = -this.width+"px";
        this.move(1000,-this.width,0,element,callback);
    };
    Animation.prototype.moveOutToRight = function (element,callback) {
        this.move(1000,0,this.width,element,callback);
    };
    Animation.prototype.moveInFromRight = function (element,callback) {
        element.style.left = this.width+"px";
        this.move(1000,this.width,0,element,callback);
    };
    animte.Animation = Animation;

})();
