/**
 * Created by Lenovo on 2017/5/1.
 */
angular.module('myApp',['ionic'])  
 .config(function($ionicConfigProvider) {
$ionicConfigProvider.platform.ios.tabs.style('standard'); 
$ionicConfigProvider.platform.ios.tabs.position('bottom');
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('standard');

$ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
$ionicConfigProvider.platform.android.navBar.alignTitle('left');

$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

$ionicConfigProvider.platform.ios.views.transition('ios'); 
$ionicConfigProvider.platform.android.views.transition('android');
})

    .controller('myctrl',function($scope, $ionicModal, $rootScope) {
        //实现全选
        $scope.checkBox=function(){
            if($(this).attr('checked')==false){
                $(this).attr('checked',true);
                $("input:checkbox").each(function()
                {
                    $(this).attr('checked',false);
                });
                $scope.heji = 0;
                $scope.jiesheng =0;
            }
            else{
                $(this).attr('checked',false);
                $('input:checkbox').each(function()
                {
                    $(this).attr('checked',true);
                });
                $scope.compute();
            }
        };
        $scope.money = 355.00;
        $scope.price = 279.70;
        $scope.heji = 0;
        $scope.jiesheng =0;
        $scope.compute = function(){
            $scope.heji = computeHeji(num(),$scope.price);
            $scope.jiesheng = computeJiesheng(num(),$scope.money,$scope.price);
        };
        $scope.compute2 = function(){
            $scope.compute();
            $("#all").attr("checked",false);
        }
    } )
//合计
function computeHeji(num,price){
	if(parseInt(price*num)>=500){
		return parseInt(price*num);
	}else{
		return parseInt(price*num)+10;
	}
}
//节省下来的钱
function computeJiesheng(num,money,price){
	if(parseInt(price*num)>=500){
		return 0;
	}else{
		return 10;
	}
   
}
//获取所有被选中的input:text中value相加的值
function num(){
    var temp = 0;
    $("input:text").each(function(){   	
        if($(this).parent().prev().attr('checked')=="checked"){
        	temp += parseInt($(this).attr('value'));        	
        }else{
        	 temp +=0;
        }
           
    });
    return temp;
}
//实现加1
function add(a){
    var temp = $(a).parent().find('input:text').attr('value');
    $(a).parent().find('input:text').attr('value',parseInt(temp)+1);
    
}
//实现减1
function minu(a){
    var temp = $(a).parent().find('input:text').attr('value');
    if(temp>0)
        $(a).parent().find('input:text').attr('value',parseInt(temp)-1);
}
