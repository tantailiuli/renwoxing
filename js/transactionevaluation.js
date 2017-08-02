var $inr = $(".promaincnt .item .iteminr.inr1 .right");
$("ul.sel li",$inr).eq(0).addClass("active");
$("ul.cnt li",$inr).eq(0).addClass("block");
$(document).ready(function(){
	$("ul.sel li",$inr).hover(function(){
		var $index = $(this).index()
		$(this).addClass("active").siblings().removeClass("active");
		$("ul.cnt li",$inr).eq($index).addClass("block").siblings().removeClass("block");
	})
	$("ul.cnt li .list .per span:first-child",$inr).each(function(){
		$(this).width(parseFloat($(this).next().text())*1.34)
	})
})