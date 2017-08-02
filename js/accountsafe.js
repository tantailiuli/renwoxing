$(document).ready(function(){
	$(".accountsafe .top").append("<p><span class=\"color\"><span></span></span><span class=\"text\"></span></p>")
	var $val = $(".accountsafe .top input[type='hidden']").val(),
		$span = $(".accountsafe .top p .color span"),
		$text = $(".accountsafe .top p .text")
		$num = 4;
	var $per = $val/$num;
	if($val && $per>0 && $per<0.25 || $per==0.25){
		$span.attr("class","cor1");
		$text.text("极低");
	}
	if ($val && $per>0.25 && $per<0.5 || $per==0.5) {
		$span.attr("class","cor2");
		$text.text("低");
	}
	if ($val && $per>0.5 && $per<0.75 || $per==0.75) {
		$span.attr("class","cor3");
		$text.text("中");
	}
	if ($val && $per>0.75 && $per<1 || $per==1) {
		$span.attr("class","cor4");
		$text.text("高");
	}
	$span.css({
		"width":$per*100+"%"
	})
})