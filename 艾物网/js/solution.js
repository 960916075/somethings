$(function(){
    $(".case-item .skill ul li").hover(function(){
        $(this).find("span").stop().animate({height:500},1000);
    },function(){
        $(this).find("span").stop().animate({height:0},0);
    });
    $("#skill").show().siblings("#industry").hide();
     $(".case-item h2 a ").hover(function(){
        var i=$(this).index();
        var n=1;
        if(i%2==1){
            $("#industry").show().siblings("#skill").hide();
            $(this).addClass("focus").siblings().removeClass("focus");
        }else{
            $("#skill").show().siblings("#industry").hide();
            $(this).addClass("focus").siblings().removeClass("focus");

        }
        
     });
});
        // $(this).find("a .left img").animate({left:-204},0);




// $(this).find("a").addClass("li-01").parent().siblings().find("a").