define(function(){
	function mouseup(){
		$(document).on("mouseup",function(){
			$(document).unbind("mousemove")
		})
	}
	return mouseup;
})