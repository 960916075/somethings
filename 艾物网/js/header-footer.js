$(function(){ 
    var num = 1;
    $(".text-left .weChat").hover(function(){
        if (num%2==1) {
            $(this).children("i").stop().fadeIn();
            $(this).children("img").addClass("focus");
        }else{
            $(this).children("i").stop().fadeOut();
            $(this).children("img").removeClass("focus");
        };
        num ++;
    });
});