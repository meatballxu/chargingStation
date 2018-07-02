$(document).ready(function(){
	//activeNav(2); //加载并激活底部菜单 0：充电桩 1：扫一扫 2：个人中心
	
	if($("body").hasClass("charHis-page")) {
		$(".charge-done").click(function(){
			openModalSpec($("#chargingModal_done"));
		});
		$(".charge-restart").click(function(){
			openModalSpec($("#chargingModal_fail"));
		});
		$(".modalspec-close,.panel-overlay-black").click(closeModalSpec);
	}
	
	$(".link-to-recharHis").click(function(){
		location.href = "../user/rechargeHistory.html";
	});
	$(".link-to-charHis").click(function(){
		location.href = "../user/chargeHistory.html";
	});
	$(".link-to-us").click(function(){
		location.href = "../user/aboutUS.html";
	});
	$(".link-to-sugg").click(function(){
		location.href = "../user/suggestion.html";
	});
	$(".link-to-tel").click(function(){
		location.href = "../user/telChange.html";
	});
	$(".sendCode").click(function(){
		if(!$(this).hasClass("disable")) {
			$(this).addClass("disable");
			$(".getCode .sendCode").html("倒计时60秒");
			timming(60);
		}
	});
	
	$(".stars a").click(function(){
		var i = $(this).index()+1;
		$(this).closest(".stars").removeClass().addClass("stars stars"+i);
	});
});
//倒计时
var tt_timming;
function timming(time) {
	 tt_timming = setInterval(function(){
		time--;
		if(time>1) {
			$(".getCode .sendCode").html("倒计时"+time+"秒");
		}else {
			clearInterval(tt_timming);
			$(".getCode .sendCode").removeClass("disable").html("发送验证码");
		}
	},1000)
}