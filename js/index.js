$(function(){
	$(".shrinkTitle").click(function(){
		if($(this).parent().children("ul").css("display")=='none'){
			$(this).parent().children("ul").css("display","block");
			$(this).children("b").css("-webkit-transform",'translate(0,-50%) rotate(135deg)');
			$(this).children("b").css("transform",'translate(0,-50%) rotate(135deg)');
		}else{
			$(this).parent().children("ul").css("display","none");
			$(this).children("b").css("-webkit-transform",'translate(0,-50%) rotate(-45deg)');
			$(this).children("b").css("transform",'translate(0,-50%) rotate(-45deg)');
		}
	});
});
