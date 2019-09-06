$(function(){
	var index;
	// 省市  为了省事我是用上面的cityData.
	var cityData = ['全部省市','四川省','河北省','北京市','广西省','福建省'];
		$(".allOption>div").click(function(){
		index = $(this).index();
		var dataJson =[];
		//改变选择栏里面的值
		//先删除里面得东西
		$('.select_control_content').children().remove();
		//在判断条件
		switch ($(this).children("b").text()){
			case '高中':{
				//title
				$(".select_control_name h5").html($(".option_year").eq(index).children("b").text());
				if($(".select-value-input").html()=='点击输入'){
					$('.select_control_content').append('<input value="" placeholder="请输入关键字">');
				}else{
					$('.select_control_content').append('<input placeholder="请输入关键字" value='+$(".select-value-input").html()+'>');
				}
				
			}
				break;
			case '省市':{
				dataJson = cityData;
				$(".select_control_name h5").html($(".option_year").eq(index).children("b").text());
		//			将dataJson加入进去
				for(var i=0;i<dataJson.length;i++){
					$('.select_control_content').append('<span>'+dataJson[i]+'</span>');
				}
		// 			判断本来的值是否有
					var mount=0;
					for(var i=0;i<dataJson.length;i++){
						if(dataJson[i] == $(this).children("span").text()){
								//将第一个附加给点击class
								mount++;
							$('.select_control_content span').eq(i).addClass("hover");
							break;
						}
					}	
					if(mount!=1){
						//将第一个附加给点击class
						$('.select_control_content span').eq(0).addClass("hover");
					}
				//	选择点击样式
				$(".select_control_content span").click(function(){
					$(".select_control_content span").removeClass("hover");
					$(this).addClass("hover");
				});
			}
				break;
			default:
				return 0;
				break;
		}
//		将弹出层打开
		$(".select").css("display","block");
	});
//	确认和取消
	$('.select_control_verify a').eq(1).click(function(){
		if($(".select_control_name h5").text()=="高中"){
			$(".select-value-input").html($('.select_control_content input').val());
		}else{
			$(".allOption>div span").eq(index).html($('.select_control_content .hover').text());
		}
		
		$(".select").css("display","none");
	});
	$('.select_control_verify a').eq(0).click(function(){
		$(".select").css("display","none");
	});

});

