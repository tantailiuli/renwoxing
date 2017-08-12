//
function SelectPullDown2(box){
	this.selectBox = document.getElementById(box);
	this.selectIpt = document.getElementById(box).getElementsByTagName("input")[0];
	this.selectDivBtn = document.getElementById(box).getElementsByTagName("p")[0];
	this.selectDivList = document.getElementById(box).getElementsByTagName("div")[0];
	this.selectSpan = document.getElementById(box).getElementsByTagName("span");
}
SelectPullDown2.prototype ={
	selectBox : '',
	selectIpt : '',
	selectDivBtn : '',
	selectDivList : '',
	selectSpan : '',
	iptEven : function(){
		var self = this;
		this.selectDivBtn.onclick = function(){
			self.selectListShow();
		}	
		this.selectBox.onmouseleave = function(){
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
if(document.getElementById('typeselect2')){
	var type2 = new SelectPullDown2('typeselect2');
	type2.init();
}
if (document.getElementById('typeselect3')){
	var type3 = new SelectPullDown2('typeselect3');
	type3.init();
}
if(document.getElementById('typeselect4')){
	var type2 = new SelectPullDown2('typeselect4');
	type2.init();
}
//
$(".publishingservice .item .cover .up .upload .file").change(function(){
	$(this).parent().prev().val($(this).val());
	$(this).parent().parent().next().find("img").attr("src",$(this).val())
})
//
if(document.getElementById('TextArea1')){
	CKEDITOR.replace( 'TextArea1',
	    {
	        height: 400,
	        language: 'zh-cn',
	        removeDialogTabs: 'image:advanced;link:advanced'
	    }
	);
}