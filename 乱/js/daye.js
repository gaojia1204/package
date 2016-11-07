function daye(obj,json,fn){
				var speed=0;
				var attr=null;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var off=true;
					for(attr in json){
					target=json[attr];
					var icon=parseInt(getStyle( obj,attr));
					if(attr=="opacity"){
						icon=parseInt(getStyle( obj,attr)*100);
					}else{
						icon=parseInt(getStyle( obj,attr))
					}
					if(icon<target){
						speed=Math.ceil((target-icon)/20);
					}else{
						speed=Math.floor((target-icon)/20);
					}
					if(target!=icon){
						off=false;
					}
					
					if(attr=="opacity"){
					obj.style[attr] = ( icon + speed ) / 100;
					obj.style.filter = 'alpha( opacity = '+( icon + speed )+' )';
					}else{
					obj.style[attr] = icon + speed + 'px';
							}
					if(off){
					clearInterval(obj.timer);
					fn&&fn.call(obj);
						}
					}
				},14);
			}
			function getStyle( obj , attr ){
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
};