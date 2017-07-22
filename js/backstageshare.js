var $nav = $(".providerbackstage .person .down .nav");
$(".head",$nav).click(function(){
	$(this).toggleClass("cur");
	$(this).parent().find("ul").slideToggle(300);
})