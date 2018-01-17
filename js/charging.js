
$(document).ready(function(){
	//activeNav(0); //加载并激活底部菜单 0：充电桩 1：扫一扫 2：个人中心
	
	//链接至充电桩详情页
	$(document).on("click",".link-to-detail",function(){
		location.href="../charging/detail.html";
	});
	if($("body").hasClass("stations-page")) {//监听充电桩列表页面滚动
		$(".stations-page .content").scroll(function() {
			var scrollTop = $(".stations-page .content").scrollTop();
	    		if(scrollTop <=40) {
	    			$(".searchbar").show();
	    		}else {
	    			$(".searchbar").hide();
	    		}
		});
		
		$(".filter>a").click(function(){
			var obj = $(this).clone();
			hideFilter();
			if(!obj.hasClass("active")) {
				$("#filterbar_overlay").show();
				$(this).addClass("active");
				$("#"+$(this).attr("data-target")).show();
			}
		});
		$("#filterbar_overlay").click(hideFilter);
		$(".options a").click(function(){
			$(this).closest(".options").find("a").removeClass("active");
			$(this).addClass("active");
			var spanobj = $(".filter>a.active span");
			if($(this).hasClass("all")) {
				spanobj.html(spanobj.attr("data-default"));
			}else {
				spanobj.html($(this).html());
			}
			hideFilter();
		});
		
	}
	/**电站详情页**/
	if($("body").hasClass("station-detail")) {
		$("#stationImgs,#stationImgs img").height($(window).width()*0.6);
		$("#stationImgs img").width($(window).width());
		$(".swiper-container").swiper({
			autoplay : 3000,
			autoplayDisableOnInteraction : false,
		});
	}
	/**搜索页面 0117**/
	if($("body").hasClass("search-page")) {
		$('#search').bind('input propertychange', function() {  
		   if($('#search').val().trim()) {
		   	$(".clearKey").show();
		   	showSearchTips();
		   }else {
		   	clearSearchTips()
		   }
		});
		$(".clearKey").click(clearSearchTips);
	}
	/**搜索页面 0117**/
});

$("#icon_location").click(function(){//点击浮动位置图标 打开右边栏
	$.openPanel("#panel_location");
});
$(".searchbar-cancel,.search-tag-box a").click(function(){
	$(".search-tag-box").addClass("hidden");
});
function hideFilter() {
	$(".filterbar .options").hide();
	$(".filter>a").removeClass("active");
	$("#filterbar_overlay").hide();
}
function showMapDetail(){
	$(".map-detail").removeClass("hide");
}
function showSearchTips(){
	$(".search-tag-box").removeClass("hidden");
}
function clearSearchTips(){
	$(".clearKey").hide();
	$('#search').val("");
	$(".search-tag-box").addClass("hidden");
}
