//左上角送货至
			
function address(){
	box1.onmouseover=function(){
		add1.style.display='block';
		for(var i=0;i<span.length;i++){
			span[i].index=i;
			span[i].onclick=function(){
				
				for(var j=0;j<span.length;j++){
					if(this.index==j){
						span[j].style.background='red';
						span[j].style.color="#fff";
						add.innerHTML=span[j].innerHTML;
					}else{
						span[j].style.background='#fff';
						span[j].style.color="#000"
					}
					
				}	
			}
		}
	}
	box1.onmouseout=function(){
		add1.style.display='none';
	}
}
//左上角送货至结束
//三级菜单
var nav=document.getElementById("nav");
var P=document.getElementById("all");
var ul=document.getElementById("naver");
var li1=document.getElementsByClassName('naver-one');
var ul1=document.getElementsByClassName('naver-two');
var li2=document.getElementsByClassName('naver-three');

P.onmouseover=function(){
	ul.style.display="block";
	for(var i=0;i<li1.length;i++){
		li1[i].index=i;
		li1[i].onmouseover=function(){
			for(var j=0;j<li1.length;j++){
				if(this.index==j){
					li1[j].style.background='#fff';
					li1[j].style.color='red';
					ul1[j].style.display='block';
					ul.style.display="block";
					for(var l=0;l<li2.length;l++){
						li2[l].index=l;
						li2[l].onmouseover=function(){
							for(var k=0;k<li2.length;k++){
								if(this.index==k){
								li2[k].style.background='#fff';
								li2[k].style.color='red';
								ul.style.display="block";
							}else{
								li2[k].style.background='#B61D1D';
								li2[k].style.color='#fff';
							}
						}
					}		
				}		
				}else{
					li1[j].style.background='#B61D1D';
					li1[j].style.color='#fff';
					ul1[j].style.display='none';
				}
			}
		}
	}
}
nav.onmouseout=function(){
	ul.style.display='none';
}
//三级菜单结束
//搜索框，跨域

var text=document.getElementById("text");
			var list=document.getElementById("list");
			var num=0;
			var a=document.getElementsByTagName('a');
			// 实现跨域
			text.onkeyup=function(ev){
				ev=ev||event;
				if(ev.keyCode!=38&&ev.keyCode!=40&&ev.keyCode!=13){
					var val=text.value;
					var oscripts=document.createElement('script');
//					oscripts.src='http://dd-search.jd.com/?curr_url=search.jd.com"%"2FSearch&search_key='+val+'&callback=jjj';
					oscripts.src= 'http://dd-search.jd.com/?ver=2&zip=1&key='+val+'&pvid=urac9lsi.akzlh2&curr_url=search.jd.com%2FSearch&search_key='+val+'&callback=jjj -H ';
//					oscripts.src='http://dd-search.jd.com/?ver=2&zip=1&key='+val+'&pvid=y8k18lsi.akzlh2&curr_url=search.jd.com"%"2FSearch&search_key='+val+'&callback=jjj';
					
					document.body.appendChild(oscripts);
					document.body.removeChild(oscripts);
				}	
			}
			//纯js操作
			function jjj(aaa){
				var str='';
				for(var i=0;i<aaa.length;i++){
					str +='<li><a href="http://search.jd.com/Search?keyword='+aaa[i][key]+'&enc=utf-8&wq='+aaa[i][key]+'" target="_blank">'+aaa[i][key]+'</a></li>'
				}
				list.innerHTML=str;
				list.style.display='block';
				mouse();
				key();
				
			}
			function mouse(){
				var a=document.getElementsByTagName('a');
				for( num=0;num<a.length;num++){
					
					a[num].onmouseover=function(){
						
						text.value=this.innerHTML;
						
					}
				}
			}
			function key(){
				var a=document.getElementsByTagName('a');
				var len=a.length-1;
				alert(len)
				document.onkeydown=function(ev){
					ev=ev||event;
					if(ev.keyCode==40){
						num++;
						if(num>len){
							num=0;
							
						}
						tab();
						
					}
						if(ev.keyCode==38){
							num--;
							if(num<0){
								num=len;
							}
							tab();
						}
						if(ev.keyCode==13){
							open("http://search.jd.com/Search?keyword="+aaa[i][key]+"&enc=utf-8&wq="+aaa[i][key],"_blank")
						}	
					}
				}	
			function tab(){	
				for(var j=0;j<a.length;j++){
					if(num==j){
						a[j].style.background='red';
						text.value=a[num].innerHTML;
						
					}else{
						a[j].style.background='#fff';
					}
				}
			}
//跨域失败。。。。。。。。。 








