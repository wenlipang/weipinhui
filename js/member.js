$(function(){
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
})

//给头部列表信息绑定点击事件
$(function(){
	$('.head-bottom .head-inner .head-main-list li').click(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
		$(this).addClass('font');
		$('.head-bottom .head-inner .head-main-list li:first-child').css('backgroundColor','#f10180')
	});

})


// 给中心内容中的整点秒杀头部 时间列表绑定鼠标滑过事件
$(function(){
	$('.change .right-lis li').mouseenter(function(){
		$(this).addClass('bjs');
	}).mouseleave(function(){
		$(this).removeClass('bjs');
	})
})



// 给返回顶部绑定点击事件
$(function(){
	$('.backtop-tu,#totop').click(function(){
		// $('#totop').css('display','block');
		// $('body').animate( {scrollTop: 0}, 500);
		$(window).scrollTop(0);
	})
})
