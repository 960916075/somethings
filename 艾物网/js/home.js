// ^_^ 滑动按钮

$(function(){
    var num,judge;
    $(".solution .promo-nav a,.solution li,.about-us promo-nav a").hover(function(){
        num=$(this).index();
        promoNavAdd(".solution .promo-nav a");
    },function(){
        promoNavRemove(".solution .promo-nav a");
    });

    $(".new-case .promo-nav a,.new-case li,.about-us promo-nav a").hover(function(){
        num=$(this).index();
        promoNavAdd(".new-case .promo-nav a");
        $(".new-case img").eq(num).css("opacity","1");
    },function(){
        promoNavRemove(".new-case .promo-nav a");
        $(".new-case img").eq(num).css("opacity","0");
    });

    $(".about-us .promo-nav a,.about-us ul li").hover(function(){
        num=$(this).index();
        promoNavAdd(".about-us .promo-nav a");
    },function(){
        promoNavRemove(".about-us .promo-nav a");
    });

// ^_^  promoNav被调用的方法

    function promoNavAdd(selectorName){
        $(selectorName).eq(num).addClass("promo-focus");
    }
    function promoNavRemove(selectorName){
        $(selectorName).eq(num).removeClass("promo-focus");
    }

                                    /* 登录与注册 */

    $(".land").click(function(){
        $(".login").fadeIn();
        $(".nav-cont").css({opacity:0.2});
    });
    $(".land+a").click(function(){
        $(".signIn").fadeIn();
        $(".nav-cont").css({opacity:0.2});
    });
    $("#land,#cancel").click(function(){
        $(this).parent().fadeOut();
        $(".nav-cont").css({opacity:1});
    });

                                /* ^_^ product tab切换 */

    $(".product .btn a:first").addClass("active");
    $(".product .btn a").hover(function(){
        $(this).addClass("active").siblings("a").removeClass("active");
        if ($(this).index()==1) {
            $(".product .list .lcd").animate({left:-1260},1000);
            $(".product .list .player").animate({left:0},1000);
            $(".product").css({height:900});
        }else{
            $(".product .list .lcd").animate({left:0},1000);
            $(".product .list .player").animate({left:1260},1000);
            $(".product").css({height:700});
        };
    });

    

                                    /* ^_^ <资讯我们>中的注意事项的单行滚动 ^_^ */

    setInterval(function(){
        $("#roll ul").animate({top:-30},1400,function(){
            $(this).find("li").first().appendTo(this);
            $(this).css({top:0});
        });
    },3000);

    // var jumpTime;
                                 /* ^_^ 下拉时顶部菜单固定 ^_^ */

    $(document).scroll(function(){
        if ($("body").scrollTop()>=560) {
            $(".handler").addClass("handler-move");
        }else{
            $(".handler").removeClass("handler-move");
        };

        if ($("body").scrollTop()>=1000) {
            $(".nav-right li").addClass("move");
        }else{
            $(".nav-right li").removeClass("move");
        };

        if ($("body").scrollTop()>=1380) {
            $(".stick").fadeIn();
            $(".stick").addClass("jump");
        }else{
            $(".stick").fadeOut();
            $(".stick").removeClass("jump");
        };
        /*if ($("body").scrollTop()>=1380) {
            $(".stick").fadeIn();
            clearInterval(jumpTime);
            jumpTime= setInterval(function(){
                $(".stick").animate({bottom:10},500,function(){
                    $(".stick").animate({bottom:0},500);
                });
            },1000);
        }else{
            $(".stick").fadeOut();
            clearInterval(jumpTime);
        };*/
    });

    /* ^_^ 顶部导航滑动效果 ^_^ */
    
    judge=1;
    $(".handler").click(function(){
        if (judge==1) {
            $(this).addClass("active");
            $(".nav-cont").addClass("fixed").fadeIn(800);
            $(".nav-cont ul").css({paddingLeft:200});
            $(".header-all").css({paddingBottom:101});
            $(".nav-cont ul ul").css({left:-214});
            judge=0;
        }else{
            $(this).removeClass("active");
            $(".nav-cont").removeClass("fixed");
            $(".nav-cont ul").css({paddingLeft:0});
            $(".header-all").css({paddingBottom:0});
            $(".nav-cont ul ul").css({left:-18});
            judge=1;
        };
    });

    /* ^_^ 侧边栏的导航点击效果 ^_^ */

    $(".nav-right li").click(function(){
        switch($(this).index()){
            case 0: $("body").animate({scrollTop:760}); break;
            case 1: $("body").animate({scrollTop:1480}); break;
            case 2: $("body").animate({scrollTop:2240}); break;
            case 3: $("body").animate({scrollTop:2860}); break;
            default: $("body").animate({scrollTop:3620}); break;
        }
    });

    /* ^_^ 置顶按钮 ^_^ */

    $(".stick").click(function(){
        $("body").animate({scrollTop:0});
    });

                                    /* ^_^ banner轮播 ^_^ */

    var i=0,j=1;

    $(".banner .bnr-img").append($(".bnr-img li").eq(0).clone(true));
    var time = setInterval(function(){
        i++;
        move(i);
    },4000);

    $(".bnr-img .banner-1").find("img").animate({top:0},1000).parent().find("h3").animate({bottom:58},1000).parent().find("p").animate({bottom:0},1100);
    
    function move(num){
        if (i==4) {
            $(".bnr-img").css({left:0});
            i=1;
        };

        if (num==4) {
            num=1;
        };

        fade(num);

        $(".bnr-img").animate({left:-1920*i},2000);
        if (i==3) {
            $(".banner .promo li").eq(0).addClass("focus").siblings().removeClass("focus");
        }else{
            $(".banner .promo li").eq(i).addClass("focus").siblings().removeClass("focus");
        };
    }

                 // ^_^ 定时器开关 ^_^ 

    $(".banner").hover(function(){
        clearInterval(time);
        $(".banner .left,.banner .right").fadeIn();
        $(".bnr-img .banner-1 h3")
    },function(){
        $(".banner .left,.banner .right").fadeOut();
        time = setInterval(function(){
            i++;
            move(i);
        },4000);
    });

                 // ^_^ promo点击 ^_^ 

    $(".banner .promo li").click(function(){
        i =$(this).index();
        $(".bnr-img").animate({left:-1920*i},2000);
        $(".banner .promo li").eq(i).addClass("focus").siblings().removeClass("focus");
        if (i==0) {
            i+=3;
        };
        fade(i);
    });

                // ^_^ 点击左右按钮 ^_^ 

    $(".banner .left").click(function(){
        i--;
        if (i==-1) { i= 2};
        if (i==0) {
            i+=3;
        };
        move(i);
    });
    $(".banner .right").click(function(){
        i++;
        move(i);
    });

              // ^_^ 调用banner特效

    function fade(num){
        switch (num){
            case 3: (function(){
                $(".bnr-img .banner-3 .word").find("h3").animate({top:-100},2000).parent().find("p").animate({top:-80},2000).parent().find(".pro-1").animate({left:-100},2000).parent().find(".pro-2").animate({left:-300},2000).parent().find(".pro-3").animate({left:-700},2000);
                $(".bnr-img .banner-1").find("img").animate({top:0},2000).parent().find("h3").animate({bottom:58},2000).parent().find("p").animate({bottom:0},2000)})();console.log(num);
                break;
            case 1: (function(){
                $(".bnr-img .banner-1").find("img").animate({top:-334},2000).parent().find("h3").animate({bottom:-234},2000).parent().find("p").animate({bottom:-200},2000);
                $(".bnr-img .banner-2 .r-word").find(".word").animate({top:0},2000).parent().find(".icon").animate({bottom:0},2000)})();console.log(num);
                break;
            default: (function(){
                $(".bnr-img .banner-2 .r-word").find(".word").animate({top:-290},2000).parent().find(".icon").animate({bottom:-340},2000);
                $(".bnr-img .banner-3 .word").find("h3").animate({top:70},2000).parent().find("p").animate({top:120},2000).parent().find(".pro-1").animate({left:0},2000).parent().find(".pro-2").animate({left:330},2000).parent().find(".pro-3").animate({left:750},2000)})();console.log(num);
                break;
        }
    }

});


