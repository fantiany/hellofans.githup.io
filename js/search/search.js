/**
 * Created by wst on 2016/12/30.
 */
(function () {
     function init() {
         var search=new Search();
         var value=location.search.replace("?","");
         search.searchJump(value);
     }
    init();
})();