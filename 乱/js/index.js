


/************轮播图*****************/
var box=document.getElementById("box");
var img=document.getElementById("pic12");
var ul=document.getElementById("lll");
var li=ul.children;
var num=1;
var timer=null;
for(var i=num-1;i<li.length;i++){
		li[i].index=i;
li[i].onmouseover=function(){
		num=this.index+1;
		for(var j=0;j<li.length;j++){
			if(num-1==j){
				if(j>4){
					j==0;
				}else if(j<0){
					j==4;
				}
				img.src="img/"+(num)+".jpg";
				li[j].className='a';
			}else{
				li[j].className="";
			}
		}
	}
}
setInterval(
	function(){
		num++;
		if(num>5){
			num=1;	
		}
		img.src="img/"+(num)+".jpg";
		li[num-1].className='a';
		var z=num-2;
		if(z==-1){
			z=4;	
		}
		li[z].className='';
//		box.onmouseover=function(){
//		clearInterval(timer1);
//	}
	},2000);
//box.onmouseout=function(){
//	timer=setInterval(function(){
//	num++;
//	if(num>5){
//		num=1
//	}
//	img.src="img/"+(num)+".jpg";
//		li[num-1].className='a';
//		var z=num-2;
//		if(z==-1){
//			z=4;	
//		}
//		li[z].className='';
//},2000)
//}

/****************二级菜单*********************/

var aa=document.getElementById("aa");
var cai=document.getElementById("cai");
var li1=cai.children;
aa.onmouseover=function(){
	for (var i=0;i<li1.length;i++){
		li1[i].index=i;
		cai.style.display='block';
	li1[i].onmouseover=function(){
		for(var j=0;j<li1.length;j++){
			if(this.index==j){
				li1[j].style.background='red';
				li1[j].style.color='#fff';
			}else{
				li1[j].style.background='#fff';
				li1[j].style.color='red';
				}	
			}
				
		}
	}	
}
aa.onmouseout=function(){
	cai.style.display='none';
}



















