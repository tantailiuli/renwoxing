$('#detailCarousel').carousel('cycle')
$('.carousel').carousel({
    interval: 2000
})
var $tabbox = $(".servicedetails .detailsdown");
$("ul.sel>li",$tabbox).eq(0).addClass("active");
$("ul.cnt>li",$tabbox).eq(0).addClass("block");
$("ul.sel>li",$tabbox).click(function(){
	var $index = $(this).index()
	$(this).addClass("active").siblings().removeClass("active");
	$("ul.cnt>li",$tabbox).eq($index).addClass("block").siblings().removeClass("block");
})