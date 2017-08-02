var $cntsel = $(".promain .promaincnt.buyservice .sersel2");
$("li a",$cntsel).click(function(){
	if($(this).hasClass("active")){
		$(this).toggleClass("reverse");
	}else{
		$("a",$cntsel).attr("class","")
		$(this).addClass("active");
	}
})