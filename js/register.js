 
// 用户名验证
	// $(function(){
	// 	$('.login-num').bind('click',function(){
	// 		var phone=$('#phone').val();
	// 		//正则表达式
	// 		var  reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;
	// 		if(!reg.test(phone)){
	// 			// alert('手机号错误');
	// 			$('.check-mob').removeClass('cur');
	// 			$('#phone').focus();
	// 			return false;
	// 		}
	// 	})
	// })

// 手机号正则
function isPhoneNo(phone) { 
 var pattern = /^1[34578]\d{9}$/; 
 return pattern.test(phone); 
}
         
function isCheckMa(checknum){
	var pattern=/^\d{6}$/;
	return pattern.test(checknum);
}

function SubmitMsg(){
    var phonenum = $("#name").val();
    var password=$('#pwd').val();
    var rePwd=$('#rePwd').val();
    var checknum=$('#checkMa').val();
  
 // 手机号验证
   if(phonenum.length==0 && password.length==0){
	$('#p-login-tip').removeClass('cur');
	     $("#name").focus();
	    $('#pwd-tip').removeClass('cur');
	     $("#pwd").focus();
	     return false; 
    }
   if(isPhoneNo(phonenum) == false){
   	$('#p-login-tip').removeClass('cur').text('登录名错误');
        $("#name").focus();
      // return false;         
}
  
	// 密码  验证
	if(password.length<6 || password.length>20){
		$('#pwd-tip').removeClass('cur').text('密码不符合要求');
		   $("#pwd").focus();
	      return false; 
	}

	// 确认密码 验证
	if(password != rePwd){
		$('#rePwd-tip').removeClass('cur');
		$('#rePwd').focus();
		return false;
	}

	// 验证码  验证
	if(checknum.length==0){
		$('#yzm-tip').removeClass('cur');
		$('#checkMa').focus();
		return false;
	}
	if(isCheckMa(checknum)==false){
		$('#yzm-tip').removeClass('cur').text('验证码错误');
		$('#checkMa').focus();
	}

	// 给登录绑定点击事件
		$('#login-submit').click(function(){
		$('.loading-after').removeClass('cur');
		$('.loading-before').css('display','none');
		// return false;
		$('#register-tip').css('display','inline-block');
		})
   
}    


//最后绑定事件：
$(document).ready(function(){
    $("#login-submit").bind('click',SubmitMsg);

});