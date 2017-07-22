//choose
var $sel = $(".evaluate .evaluatecnt .select .inr2 ul.ul1 li");
$sel.click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
//star
var evastar = document.querySelectorAll(".evaluate .evaluatecnt ul.content li .mid p.evaluatestar");
for (var i = 0; i < evastar.length; i++) {
	function createStar(){
		var i = document.createElement('i');
		i.className = "star";
		i.innerHTML="<i></i><i></i><i></i><i></i><i></i>";
		return i;
	}
	evastar[i].appendChild(createStar());
	var stari = evastar[i].querySelectorAll("i.star i");
	for (var j = 0; j < stari.length; j++) {
		var val = evastar[i].querySelector("input").value;
		for (var k = 0; k < val; k++) {
			stari[k].setAttribute("class","i");
		}
	}
}