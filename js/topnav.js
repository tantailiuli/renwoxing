//
function SelectPullDown(box){
	this.selectBox = document.getElementById(box);
	this.selectIpt = document.getElementById(box).getElementsByTagName("input")[0];
	this.selectDivBtn = document.getElementById(box).getElementsByTagName("p")[0];
	this.selectDivList = document.getElementById(box).getElementsByTagName("div")[0];
	this.selectSpan = document.getElementById(box).getElementsByTagName("span");
}
SelectPullDown.prototype ={
	selectBox : '',
	selectIpt : '',
	selectDivBtn : '',
	selectDivList : '',
	selectSpan : '',
	iptEven : function(){
		var self = this;
		this.selectBox.onmouseover = function(){
			self.selectListShow();
		}	
		this.selectBox.onmouseout = function(){
			self.selectListHide();
		}
		return this;	
	},
	selectListShow: function(){
		this.selectBox.setAttribute("class","type border");
		this.selectDivList.style.display = "block";
	},
	selectListHide: function(){
		this.selectDivList.style.display = "none";
		this.selectBox.setAttribute("class","type");
	},
	selectPick : function() {
		var span = this.selectSpan,
		self = this;
		function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
		for(var i=0;i<span.length;i++){
			span[i].onclick = function(){
				var this_ = i;
				self.selectDivBtn.innerHTML ="<span>" + trimStr(this.innerHTML) + "</span><i></i>";
				self.selectIpt.value= this_;
				self.selectListHide();
				if (self.selectIpt.fireEvent) self.selectIpt.fireEvent('onchange');
				else{ 
					var evt;
					evt = document.createEvent("HTMLEvents");  
					evt.initEvent("change", true, true);  
					self.selectIpt.dispatchEvent(evt);
				};
			}
		}	
		return this;
	},
	init : function(){
		this.iptEven().selectPick();	
	}
};

var year = new SelectPullDown('typeselect');
year.init();

//
window.onscroll=function(){
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    var node0 = document.getElementById('topadvertise'),
    	node1 = document.getElementById('topbar'),
    	node2 = document.getElementById('header'),
    	node3 = document.getElementById('firstnav');
    if(node0){
    	if(top>100){
	        node1 && node1.setAttribute("class","topbar_box m1230 topbarfix");
	        node2 && node2.setAttribute("class","search_box m1230 searchfix");
	        node3 && node3.setAttribute("class","nav_box m1230 navmt");
	    }else{
	        node1 && node1.setAttribute("class","topbar_box m1230");
	        node2 && node2.setAttribute("class","search_box m1230");
	        node3 && node3.setAttribute("class","nav_box m1230");
	    }
    }else{
    	if(top>0){
	        node1 && node1.setAttribute("class","topbar_box m1230 topbarfix");
	        node2 && node2.setAttribute("class","search_box m1230 searchfix");
	        node3 && node3.setAttribute("class","nav_box m1230 navmt");
	    }else{
	        node1 && node1.setAttribute("class","topbar_box m1230");
	        node2 && node2.setAttribute("class","search_box m1230");
	        node3 && node3.setAttribute("class","nav_box m1230");
	    }
    }
    
}