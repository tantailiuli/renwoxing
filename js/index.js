$('#myCarousel').carousel('cycle')
$('.carousel').carousel({
    interval: 2000
})
function indexTab(sel,cnt){
	var ulsel = document.getElementById(sel),
		ulcnt = document.getElementById(cnt),
		lisel = ulsel.getElementsByTagName('li'),
		licnt = ulcnt.getElementsByTagName('li'),
		Len = lisel.length;
	lisel[0].setAttribute("class","active");
	licnt[0].setAttribute("class","block");
	for (var i = 0; i < Len; i++) {
		lisel[i].index=i;
		lisel[i].addEventListener("mouseover",function(){
			for (var i = 0; i < Len; i++) {
				lisel[i].setAttribute("class","");
				licnt[i].setAttribute("class","");
			}
			this.setAttribute("class","active");
			licnt[this.index].setAttribute("class","block");
		},false)
	}
}
indexTab("ulsel01","ulcnt01");
indexTab("ulsel02","ulcnt02");
indexTab("ulsel03","ulcnt03");
indexTab("ulsel04","ulcnt04");