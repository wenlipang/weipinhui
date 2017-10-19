

// 验证中文名称
    function isChinaName(name) {
     var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
     return pattern.test(name);
    }

    // 验证手机号
    function isPhoneNo(phone) { 
     var pattern = /^1[34578]\d{9}$/; 
     return pattern.test(phone); 
    }
 

function SubmitMsg(){
    // var name = $("#name").val();
    var phonenum = $("#name").val();
    var password=$('#pwd').val();
    var checknum=$('#checkMa').val();
 
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

    // 验证密码
    if(password.length<6 || password.length>12){
    	$('#pwd-tip').removeClass('cur').text('密码错误');
    	   $("#pwd").focus();
          // return false; 
    }
    if(checknum.length==0){
    	$('#yzm-tip').removeClass('cur');
    	$('#checkMa').focus();
    }

    // 给登录绑定点击事件
 	$('#login-submit').click(function(){
    	$('.loading-after').removeClass('cur');
    	$('.loading-before').css('display','none');
    	return false;
    })
    // $.ajax({
    //              type : 'post',
    //              dataType : 'json',
    //              url : '提交地址....',
    //              data:{name:name,phonenum:phonenum},
    //              success:function(data){
    //                   if(data.status == 2){
    //                      layer.alert('提交成功');
    //                        $("#name").val('');
    //                       $("#phonenum").val('');
    //                     }else{
    //                     layer.alert('你是怎么找到我的 - -');
    //                   }
    //              }
    //  });    
   
}    

//最后绑定事件：
$(document).ready(function(){
    $("#login-submit").bind('click',SubmitMsg);

});