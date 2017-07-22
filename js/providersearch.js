var $cntsel = $(".providersearch_box .providersearch .leftprovider .cnt .cntsel");
$("a",$cntsel).click(function(){
	if($(this).hasClass("active")){
		$(this).toggleClass("reverse");
	}else{
		$("a",$cntsel).attr("class","")
		$(this).addClass("active");
	}
})