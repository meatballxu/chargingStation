/*!
 * =====================================================
 * Javascript for common
 * =====================================================
 */

 $(document).ready(function(){
	$.init();
 });

/** footer navigation - start **/
//加载并激活底部菜单 NUM = 0：充电桩; 1：扫一扫; 2：个人中心;
function activeNav(num) {
	if(!$(".page > nav.bar-tab").length>0) {
		$(".page").prepend("<nav class=\'bar bar-tab nav-bottom\'>"+
		"<a id='nav_charging' class=\'tab-item external border-right\'href=\'javascript:\'><i class=\'icon iconfont icon-chongdianzhuang\'></i><span class=\'tab-label\'>充电桩</span></a>"+
		"<a id='nav_scan' class=\'tab-item external border-right\'href=\'../scan/scan.html\'><i class=\'icon iconfont icon-saoyisao3\'></i><span class=\'tab-label\'>扫一扫</span></a>"+
		"<a id='nav_user' class=\'tab-item external\'href=\'../user/user.html\'><i class=\'icon iconfont icon-gerenzhongxinicon158874\'></i><span class=\'tab-label\'>个人中心</span></a></nav>"+
		"<ul class='nav-bottom-sec'><li class='border-bottom'><a class='external' href='../charging/map.html'>地图模式</a></li><li><a class='external' href='../charging/list.html'>列表模式</a></li></ul>");
		
		$("#nav_charging,.nav-bottom-sec li").click(function(){//弹出二级菜单
			$(".nav-bottom-sec").toggleClass("active");
		});
	}else {
		$(".page > nav.bar-tab a").removeClass("active");
	}
	$("nav.bar-tab > a").eq(num).addClass("active");
}
/** footer navigation - end **/

function openModalSpec(modalobj) {
	var mh = $(window).height()/2 - 100;
	modalobj.css("top",mh);
	modalobj.addClass("modal-spec-in").show();
	$(".panel-overlay-black").show();
}
function closeModalSpec() {
	$(".modal-spec").removeClass("modal-spec-in");
	$(".modal-spec,.panel-overlay-black").hide();
}

function loading() {
	$("body").append("<div class=\'load-container load8\'><div class=\'loader\'>Loading...</div></div>");
	
}
function loadingDone() {
	$(".load-container").remove();
}