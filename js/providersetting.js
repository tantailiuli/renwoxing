$(".settingshopdata .setimg .upload .file").change(function(){
	$(this).parent().prev().val($(this).val())
})