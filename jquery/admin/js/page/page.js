//分页插件

(function($){
	var ms = {
		init:function(obj,args){
			return (function(){				
				ms.fillHtml(obj,args);
				if(!obj.hasClass("binded")){
					ms.bindEvent(obj,args);
				}
							
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//上一页
				if(args.current > 1){
					obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
				}else{
					obj.remove('.prevPage');
					obj.append('<span class="prevPage disabled">上一页</span>');
				}
				//中间页码
				if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+1+'</a>');
				}
				if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
					obj.append('<span class="more">...</span>');
				}
				var start = args.current -2,end = args.current+2;
				if((start > 1 && args.current < 4)||args.current == 1){
					end++;
				}
				if(args.current > args.pageCount-4 && args.current >= args.pageCount){
					start--;
				}
				for (;start <= end; start++) {
					if(start <= args.pageCount && start >= 1){
						if(start != args.current){
							obj.append('<a href="javascript:;" class="tcdNumber">'+ start +'</a>');
						}else{
							obj.append('<span class="current">'+ start +'</span>');
						}
					}
				}
				if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
					obj.append('<span class="more">...</span>');
				}
				if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+args.pageCount+'</a>');
				}
				//下一页
				if(args.current < args.pageCount){
					obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
				}else{
					obj.remove('.nextPage');
					obj.append('<span class="nextPage disabled">下一页</span>');
				}
				//判断位置,计算宽度
				ms.setalgin(obj,args.position);
			})();
		},
		//判断位置
		setalgin:function(obj,position){
			switch(position){
				case "center":
					if(!$("#common-wrap").length){
						obj.wrap("<div id='common-wrap' style='overflow:hidden;clear:both;width:100%;'>");
					}					
					var m_r =$("#common-wrap").width()/2-obj.width()/2;
					if(m_r<31){
						m_r=0;
					}
					obj.css({"float":"right","margin-right":m_r });
					// console.log(m_r)
				break;
				case "left":
					obj.css("float","left");
				break;
				case "right":
					obj.css("float","right");
				break;
			}
		},

		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				obj.addClass("binded");
				//点击数字
				obj.on("click","a.tcdNumber",function(){
					var current = parseInt($(this).text());
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount,"position":args.position});
					if(typeof(args.backFn)=="function"){
						args.backFn(current,args.pageSize,args.pageCount);						
					}
				});
				//上一页
				obj.on("click","a.prevPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount,"position":args.position});
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1,args.pageSize,args.pageCount);
					}
				});
				//下一页
				obj.on("click","a.nextPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount,"position":args.position});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1,args.pageSize,args.pageCount);					
					}

				});
			})();
		}
	}
	$.fn.createPage = function(options){
		var args = $.extend({
	        pageCount:10,//页数的总数
	        pageSize:10, //每页X条记录
	        current:1,  //默认第一页
	        position:"center",// 分页插件位置 left center right
	        backFn:function(pageCurrent,pageSize,pageCount){

	        }
		},options);	
		if(args.pageCount!=0){
			ms.init(this,args);
			$(".commonpage").show();
		}else{
			$(".commonpage").html("搜索无记录......")
							.css({
								'width':"100%",
								"float":"right",
								"text-align":"center",
								"margin-right":"0",
								"color":"#B7B7B7"
							});
		}
		
	}
})(jQuery);
