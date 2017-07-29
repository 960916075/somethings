window.onload=function(){
    var input=document.getElementsByName("inp")[0];
    var mass=document.getElementById("msg");

    input.onclick=function(){
        input.placeholder="";
    }

    input.onblur=function(){
        var val=input.value;
        if (val=="") {
            input.placeholder="请输入您的产品序列号 如：8876476737";
        };
        var patt=/^[1-9]{1}[0-9]{9}$/;
        var result=patt.test(val);
        if (result||val=="") {
            mass.innerHTML="";
        }
        else{
            mass.innerHTML="请输入正确的序列号";
        }
    }
}
