$(function(){
  var num;
       $(".recommend-right .page").eq(0).show().siblings("page").hide();
       $(".recommend-right .page li").click(function(){        
          var i=$(this).index();
          $(".recommend-right .ul-1").eq(i).show().siblings(".ul-1").hide();
          $(this).find("a").addClass("li-01").parent().siblings().find("a").removeClass("li-01");
          num=i;
       });

      $(".recommend-right .page-2 .li-07").click(function(){
        num=num||0;
        num--;
        if (num<0) {
          num=0;
        };
        change(num);
        // $(".recommend-right .ul-1").eq(num).show().siblings(".ul-1").hide();
        // $(".page li").eq(num).find("a").addClass("li-01").parent().siblings().find("a").removeClass("li-01");
       });

      $(".recommend-right .page-2 .li-08").click(function(){
        num=num||0;
        num++;
        if (num==$(".page li").length) {
          num=$(".page li").length-1;
        };
        change(num);
       //  $(".recommend-right .ul-1").eq(num).show().siblings(".ul-1").hide();
       //  $(".page li").eq(num).find("a").addClass("li-01").parent().siblings().find("a").removeClass("li-01");
       // 
       });

      $(".recommend-right .page-2 .li-09").click(function(){
        num=num||$(".page li").length-1;
        change($(".page li").length-1);
        /*$(".recommend-right .ul-1").eq(num).show().siblings(".ul-1").hide();
        $(".page li").eq($(".page li").length-1).find("a").addClass("li-01").parent().siblings().find("a").removeClass("li-01");*/
        num=$(".page li").length-1;
      });



      function change(eq){
        $(".recommend-right .ul-1").eq(num).show().siblings(".ul-1").hide();
        $(".page li").eq(eq).find("a").addClass("li-01").parent().siblings().find("a").removeClass("li-01");
      };


      $(".case .engineering-right .about-more").hover(function(){
          $(this).css("color","white");
          $(".case .engineering-right span").css({width:81});
      },function(){
        $(this).css("color","#16a3e5");
        $(".case .engineering-right span").css({width:0});
      });
   });



