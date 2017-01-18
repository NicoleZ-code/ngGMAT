/*
* 自适应滚动插件
*author Crystal Zyh
*date 2016.3.17
*/
;(function($){

    var page=1,item_width=100,len,i;
    var methods ={
        
    	init:function(obj,args){
    		methods.locate(obj,args);
    		methods.bindEvent(obj,args);
            if(!args.fixed){
                $(window).resize(methods.locate(obj,args));
            }
    	},
    	locate:function(obj,args){
            var $ul = args.ulContainter;
            var $li = args.liContainter;
            var box_width = obj.width();           
            len = $li.length;   
            
            if(args.fixLen){//如果固定个数
                i = args.fixLen;
                item_width = args.imgWidth;
            }else{
                item_width = args.imgWidth+ args.minMargin; //min-width
                i = Math.ceil(box_width / item_width)-1; //每版放i个图片 
            }
            var margin =Math.ceil((box_width/i-args.imgWidth)*0.5);

            $li.css({
                "margin":"0px  "+margin+"px"
                });
            item_width = args.imgWidth+margin*2;
            var d_width = Math.ceil(item_width * len);  //真实的总宽度
            $ul.width(d_width);
            obj.width(item_width*i); //重定位

             if(len < i){
                 args.btnPre.hide();
                 args.btnNext.hide();
             }else{
                 args.btnPre.show();
                 args.btnNext.show();    
            } 
            $ul.animate({  
                'left':0
            },0);       
    	},
    	bindEvent:function(obj,args){
            var $ul = args.ulContainter;

            args.btnNext.click(function(){ 
                var box_width = obj.width();
                 var page_count  ;   //只要不是整数，就往大的方向取最小的整数  
                 if(i==2){
                     page_count = Math.ceil(len / i)             
                 }
                 else{
                     page_count = Math.ceil(len /(box_width / item_width)) 
                 }
                 if( !$ul.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
                      if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。  
                        $ul.animate({ "margin-left" : '0px'}, args.time); //通过改变left值，跳转到第一个版面  
                        page = 1;  
                      }else{  
                        $ul.animate({ "margin-left" : '-='+box_width }, args.time);  //通过改变left值，达到每次换一个版面  
                        page++;  
                     }  
                 }  
            });  

            args.btnPre.click(function(){
                 var box_width = obj.width();  
                 var page_count=0  ;   //只要不是整数，就往大的方向取最小的整数  
                 if(i==2){
                     page_count = Math.ceil(len / i)             
                 }
                 else{
                     page_count = Math.ceil(len /(box_width / item_width)) 
                 }
                 if(!$ul.is(":animated") ){    //判断"内容展示区域"是否正在处于动画  
                     if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。  
                        $ul.animate({ "margin-left" : '-='+box_width*(page_count-1) }, args.time);  
                        page = page_count;  
                    }else if(page>0){
                        $ul.animate({ "margin-left" : '+='+box_width }, args.time);  
                        page--;  
                    }  
                 }  
            });          
        }

    }

	$.fn.fixsilder = function(options){
		var args = $.extend({
		        ulContainter:null,
		        liContainter:null,
                btnPre:null,  //上一页
                btnNext:null, //下一页
		        imgWidth:100,//图片宽度,
                fixLen:null, //固定个数
		        minMargin:5, //最小间隔,
		        fixed:true, //是否固定宽度 ,否则每次调整浏览器窗口大小就会重新定位
                time:1000,
		        backFn:function(pageCurrent,pageSize,pageCount){

		        }
			},options);	

            methods.init(this,args);		
	}
})(jQuery);

