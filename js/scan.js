
$(document).ready(function(){
	activeNav(1); //加载并激活底部菜单 0：充电桩 1：扫一扫 2：个人中心
	
	$("#chooseType").picker({
	  toolbarTemplate: '<header class="bar bar-nav">\
	  <button class="button button-link pull-right close-picker">确定</button>\
	  <h1 class="title">请选择充电方式</h1>\
	  </header>',
	  cols: [
	    {
	      textAlign: 'center',
	      values: ['按金额','按时间','按电量']
	    }
	  ]
	});
});