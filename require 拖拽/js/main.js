require(["mousemove"],function(aaa){
	$(document).on("mousedown",function(ev){
		ev=ev||event;
		var x=ev.offsetX;
		var y=ev.offsetY;
		aaa(x,y);
	});
	
})
