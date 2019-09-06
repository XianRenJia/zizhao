$(function(){
	var index;
	//这里定义所需要的数据,包括年份，省份，高校，录取，奖项 
	//	年份
	var year = ['全部年份','2016','2017','2018'];
	// 省市  为了省事我是用上面的cityData.
	var cityData = ['全部省市','四川省','河北省','北京市','广西省','福建省'];
	// 高校 
	var universities = ['全部高校','北京大学','清华大学','厦门大学','东北大学','上海外国语大学','北京外国语大学','东华大学',
	'东南大学','复旦大学','复旦大学医学院','哈尔滨工业大学','华东理工大学','华东师范大学','华南理工大学','南京大学','山东大学','山东师范大学'];
	//录取
	var matriculate = ['全部','通过综评录取','未通过综评录取'];
	//奖项
	var awards = ['全部','有奖项','无奖项'];
	$(".allOption>div").click(function(){
		index = $(this).index();
		var dataJson =[];
		//改变选择栏里面的值
		//先删除里面得东西
		$('.select_control_content span').remove();
		//在判断条件
		switch ($(this).children("b").text()){
			case '年份':
				dataJson = year;
				break;
			case '省市':
				dataJson = cityData;
				break;
			case '高校':
				dataJson = universities;
				break;
			case '录取':
				dataJson = matriculate;
				break;
			case '奖项':
				dataJson = awards;
				break;	
			default:
				return 0;
				break;
		}
		
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
//		将弹出层打开
		$(".select").css("display","block");
	});
//	确认和取消
	$('.select_control_verify a').eq(1).click(function(){
		$(".allOption>div span").eq(index).html($('.select_control_content .hover').text());
		$(".select").css("display","none");
	});
	$('.select_control_verify a').eq(0).click(function(){
		$(".select").css("display","none");
	});

});
