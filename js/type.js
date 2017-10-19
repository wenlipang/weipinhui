// 给搜索框绑定获得焦点事件
$(function(){
	$('.searcch input').focusin(function(){
		$(this).css('border','none');
	})
})


//  热门品牌 轮播图
$(function(){
	var m=1;
	function runPlay(){
			if(m>4){
					m=0
				}
				controlImage1(m);
				controlImage2(m);
				controlImage3(m);
				controlImage4(m);

				m++;
			}

				//给每一个按钮绑定事件
			$(".yuan1 span").mouseenter(function(){
				controlImage1($(this).index());
				m=$(this).index()+1;
			})

			$(".yuan2 span").mouseenter(function(){
				controlImage2($(this).index());
				m=$(this).index()+1;
			})
			$(".yuan3 span").mouseenter(function(){
				controlImage3($(this).index());
				m=$(this).index()+1;
			})
			$(".yuan4 span").mouseenter(function(){
				controlImage4($(this).index());
				m=$(this).index()+1;
			})
			//控制图片变化
			function controlImage1(n){
				$(".lis-inner-item1").removeClass("current").eq(n).addClass("current");
				

				$(".yuan1 span").removeClass("f1").eq(n).addClass("f1");
			
			}
			function controlImage2(n){
				$(".lis-inner-item2").removeClass("current").eq(n).addClass("current");
				$('.yuan2 span').removeClass("f1").eq(n).addClass("f1");
			}
			function controlImage3(n){
				$(".lis-inner-item3").removeClass("current").eq(n).addClass("current");
				$('.yuan3 span').removeClass("f1").eq(n).addClass("f1");
			}
			function controlImage4(n){
				$(".lis-inner-item4").removeClass("current").eq(n).addClass("current");
				$('.yuan4 span').removeClass("f1").eq(n).addClass("f1");
			}

})


// 商品列表导航绑定点击事件
$(function(){
	$('.shop-nav-item').click(function(){
		$('.shop-nav-item a').removeClass('abjs').eq($(this).index()).addClass('abjs');
		$('shop-item').scrollTop($(window).innerHeight*$(this).index());
	})
})

$(function(){

	  // console.log(scrollY)
	  $(window).scroll(function(){
	  		  var scrollY=$(window).scrollTop();
		  	if(scrollY<800){
		  	$('.shop-nav-item').siblings('li').children().removeClass('abjs');
			$('.shop-nav-item').eq(0).children().addClass('abjs');
		  	}
		  	if(scrollY>760){
			$('.shop-nav-item').siblings('li').children().removeClass('abjs');
			$('.shop-nav-item').eq(1).children().addClass('abjs');
			}
			if(scrollY>1400){
			$('.shop-nav-item').siblings('li').children().removeClass('abjs');
			$('.shop-nav-item').eq(2).children().addClass('abjs');
			}
			if(scrollY>2000){
			$('.shop-nav-item').siblings('li').children().removeClass('abjs');
			$('.shop-nav-item').eq(3).children().addClass('abjs');
			}
	  })
	
})