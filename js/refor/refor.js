/**
 * Created by Administrator on 2016/12/30 0030.
 */
(function () {
    function init() {
        var reforNow = $(".ce");
        var status = "register";
        reforNow.click(function () {
            var userID=$("#users").val();
            var password =$("#passwords").val();
            var pass=$("#pass").val();

            new Refor("http://datainfo.duapp.com/shopdata/userinfo.php",
                {status:status,userID:userID,password:password},$(".zhu"),function (result) {
                console.log(result);

                    if (pass==password){
                        if(result==1){
                            alert("注册成功！");
                            window.location.href='../html/denglu.html';
                        }else if(result == 0){
                            alert("用户名已存在请重新输入用户名！");
                        }
                    }else{

                        alert("两次密码不同，更换用户名重新注册");
                    }
            });

        });

    }
    init();
})();
