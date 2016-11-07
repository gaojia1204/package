define(["mouseup"],function(bbb){
	function mousemove(num1,num2){
		$(document).on("mousemove",function(ev){
			ev=ev||event;
			var x=ev.clientX;
			var y=ev.clientY;
			$("#box").css({
				"top":(y-num2),
				"left":(x-num1)
			})
		})
		bbb();
	}
	return mousemove;
})