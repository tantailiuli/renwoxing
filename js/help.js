$('.helpmain_box .helpmain .select ul.ulsel>li>div').click(function(){
	if($(this).parents('li').find('ul li').length > 0){
		$(this).parents('li').toggleClass('curr').find('ul').slideToggle("300");
		$(this).parents('li').siblings().removeClass('curr').find('ul').slideUp("300");
	}
})