$(".addevaluate form .item p.starbox").each(function(){
	$(this).find("i.star i").each(function(){
		$(this).mouseover(function(){
			$(this).parent().children().removeClass("i").eq($(this).index()).addClass("i").prevAll().addClass("i");
		}).click(function(){
			$(this).parent().next().val($(this).index()+1);
		}).mouseout(function(){
			var $val = $(this).parent().next().val();
			if(!$val){
				$(this).parent().children().removeClass("i");
			}else{
				$(this).parent().children().removeClass("i").eq($val-1).addClass("i").prevAll().addClass("i");
			}
		})
	})
})