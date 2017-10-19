	$(document).ready(function(){

		//给上海绑定鼠标滑过 和离开 事件
			$(".area-btn").mouseenter(function(){
				// $("#no").css("margin-top","-5px");
				$(this).css({

					"background-color":"#fff",
					"textalign":"center",
					"border-left":"1px solid #cdcdcd",
					"border-right":"1px solid #cdcdcd",
				});
				$("#no").css("display","block").mouseenter(function(){
					$(".area-btn").css("background-color","#fff")
					// $(".area-btn .icon2").addClass("icon3")
				}).mouseleave(function(){
					$("#no").css("display","none");
					$(".area-btn").css({
						"background-color":"#f5f5f5",
						"border-left":"1px solid #f5f5f5",
						"border-right":"1px solid #f5f5f5",
						// "height":"22px"
					});

				});
			});

			//给请登录绑定鼠标滑过和离开事件
			$(".choice .and .left-login").mouseenter(function(){
				$(this).css({
					"background-color":"#fff",
					// "width":"50px",
					// "height":"27px",
					"border-left":"1px solid #cdcdcd",
					"border-right":"1px solid #cdcdcd",
				})
				// $("this::after").css("display","none");
				$(".login-list").css("display","block").mouseenter(function(){
					$(".choice .and .left-login").css("background-color","#fff")
				}).mouseleave(function(){
					$(".login-list").css("display","none");
					$(".choice .and .left-login").css({
						"background-color":"#f5f5f5",
						"border-left":"1px solid #f5f5f5",
						"border-right":"1px solid #f5f5f5"	
					});

				});

			})
			
			$(".choice .line").mouseenter(function(){
				$(this).addClass('current').siblings(this).removeClass("current");
				// $(".choice .line .nav-lists").addClass('curr').siblings(this).removeClass("curr");
			}).mouseleave(function(){
				$(this).removeClass('current');
			})


			// 给购物袋绑定滑事件
			$(".header-logo .logo-content .head-cart").mouseenter(function(){
				$(this).addClass("current");
				$(".header-con").css("display","block").mouseleave(function(){
					$(this).css("display","none");
				});
			}).mouseleave(function(){
				$(this).removeClass("current");
				// $(this).css("border")
				// $(".header-con").css("display","none");

			});

		})

// 头部列表信息 背景及字体变化
		$(function(){

			$('.head-bottom .head-inner .head-main-list li').click(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
				$(this).addClass('font');
				$('.head-bottom .head-inner .head-main-list li:first-child').css('backgroundColor','#f10180')
			});

			//给头部列表 中的 “更多” 绑定事件
			$('#icon2').css('display','none');

			$('.head-bottom .head-inner .head-main-list .mores').mouseenter(function(){
				$('#icon1').css('display','none');
				$('#icon2').css('display','block');
				$('.photo').css('display','block');
			}).mouseleave(function(){
				$('#icon1').css('display','block');
				$('#icon2').css('display','none');
				// $('.photo').css('display','none');

			})
			

			$('.photo').mouseleave(function(){
				$(this).css('display','none');
			})

		//给头部列表 中的 “更多” 的隐藏部分 绑定动画事件事件
			$('.photo-item').mouseenter(function(){
				$(this).children('.shadow').animate({
					"top":"48px",
					"height":"48px"
				})
			}).mouseleave(function(){
				$(this).children('.shadow').animate({
					'top':"0",
					"height":"96px"
					})
				})

// 给头部列表 绑定滚动事件

$(window).scroll(function() { 
		console.info($(window).scrollTop()); 
		if($(window).scrollTop()>240){
			$('.head-bottom').addClass('current');
		}else{
			$('.head-bottom').removeClass('current');
		}
	})				
	}); 
			
			


	// 右侧边栏 账号隐藏部分
$(function(){
	$('#lonum').mouseenter(function(){
		$('#lan-none').animate({
			"right":"36px"
		}).mouseleave(function(){
		$('#lan-none').animate({
			"right":"-275px"
		})
	})
	})
})

//右侧边栏 优惠券等隐藏部分
$(function(){

	$('#quans div').mouseenter(function(){
		$(this).children().animate({
			"right":"36px"
		})
	}).mouseleave(function(){
			$(this).children().animate({
				'right':'-116px'
			})
		})

// 我的消息
	$('#pens div').mouseenter(function(){
		$('#pens .q5').animate({
			"right":"36px"
		})
	}).mouseleave(function(){
		$('#pens .q5').animate({
				'right':'-116px'
			})
		})

// 返回顶部
	$('#pens .q6').mouseenter(function(){
		$('#pens .q6 p').animate({
			"right":"36px"
		})
	}).mouseleave(function(){
		$('#pens .q6 p').animate({
				'right':'-116px'
			})
		})

	
})

// 中心顶部 倒计时
 var SysSecond;    
 var InterValObj;    
     
 $(document).ready(function() {    
  SysSecond = parseInt($("#remainSeconds").html()); //这里获取倒计时的起始时间    
  InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行    
 });    
    
 //将时间减去1秒，计算天、时、分、秒    
 function SetRemainTime() {    
  if (SysSecond > 0) {    
   SysSecond = SysSecond - 1;    
   var second = Math.floor(SysSecond % 60);             // 计算秒        
   var minite = Math.floor((SysSecond / 60) % 60);      //计算分    
   var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时    
   var day = Math.floor((SysSecond / 3600) / 24);        //计算天    
    
   $("#remainTime").html("距离活动结束还剩："+day + "天"+ hour + "小时"    + minite + "分" + second + "秒");    
  } else {//剩余时间小于或等于0的时候，就停止间隔函数    
   window.clearInterval(InterValObj);       
  }    
 } 