$(document).ready(function(){
	$("#fixbid").click(function(){
		$("#fixbidcnt").show()
	});
	$("#fixbidcnt .shadow").click(function(){
		$("#fixbidcnt").hide()
	});
	$("#fixbidcnt .txt .del").click(function(){
		$("#fixbidcnt").hide()
	});
	$(".allfixwindowschoose span").click(function(){
		$("#fixbidcnt").hide()
	});
	$(".talklist").click(function(){
		$(this).parent().next().slideToggle("fast")
	});
})