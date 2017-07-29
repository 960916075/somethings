/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-22 20:12:28
 * @version $Id$
 */
$(function(){
    var clone=$(".aboutus .wrapper .plate03 .white .box ul li").clone();
    $(".aboutus .wrapper .plate03 .white .box ul").append(clone);
    var i=0;
     
     function move(){
        if(i==4){
            $(".aboutus .wrapper .plate03 .white .box ul").css({left:0});
            i=1;
        }
        $(".aboutus .wrapper .plate03 .white .box ul").animate({left:-174*i},1000);
        }
        var t=setInterval(function(){
              i++;
              move();           
           },2000);
        $(".aboutus .wrapper .plate03 .cardShow .last,.aboutus .wrapper .plate03 .cardShow .next").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(function(){
              i++;
              move();           
           },4000);       
        });
        $(".aboutus .wrapper .plate03 .white .box").hover(function(){
            $(".aboutus .wrapper .plate03 .cardShow .last,.aboutus .wrapper .plate03 .cardShow .next");
         
        });

        $(".aboutus .wrapper .plate03 .cardShow .last").click(function(){
            i--;
            if (i<=-1){i=0}
                move();
        });
        $(".aboutus .wrapper .plate03 .cardShow .next").click(function(){
            i++;
                move();
        });
});

