$(".providerpersonal .setting1 .imgbox p .upload .file").change(function(){
	$(this).parent().parent().next().find("img").attr("src",$(this).val())
})