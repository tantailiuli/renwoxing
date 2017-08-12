jQuery.extend({ 
	fixform:function(sel,cnt){
		$(sel).click(function(){
			$(cnt).show().siblings().hide().parent().show().find(".shadow").show();
		})
		$(cnt).parent().find(".shadow").click(function(){
			$(this).parent().hide()
		})
		$(cnt).find("i.del").click(function(){
			$(this).closest(".fixformbox").hide()
		})
	}
});
$.fixform(".toform1",".fixformbox .form1");
$.fixform(".toform2",".fixformbox .form2");
$.fixform(".toform3",".fixformbox .form3");
$.fixform(".toform4",".fixformbox .form4");
$.fixform(".toform5",".fixformbox .form5");
$.fixform(".toform6",".fixformbox .form6");