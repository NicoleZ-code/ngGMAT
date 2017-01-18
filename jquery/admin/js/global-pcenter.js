 $(function(){
    menuInit();//初始化
    foldGlobal();// 查询条件 折叠通用方法
 });

 
  
/*
* 头部主菜单切换
*/
function menuInit(){
  var href = window.location.href;
  var _menusindex =href.split("?menu=")[1];
  var _newsrc =href.split("?menu=")[2];
  menuEvent();
  if(_menusindex){
      if(_newsrc){
          gotoMenu(_menusindex,_newsrc)       
      }else{
          $("#pc_leftmenus li").eq(_menusindex).find(".p-simple").trigger("click");
      } 
  }else{
      $("#pc_leftmenus li").eq(0).find(".p-simple").trigger("click"); 
  }
 
}
function menuEvent(){
    $("#p_index_container").on("click","#pc_leftmenus li .p-simple",function(){ 
      var $li= $(this).parents("li"); 
      if($li.find("dl").length>0){
        if(!$li.find(".arrow").hasClass("open")){
          $li.find(".arrow").addClass("open");
          $li.addClass("active").find("dl").slideDown();
          $li.siblings().removeClass("active").find("dl").slideUp();

        }else{
          $li.removeClass("active").find("dl").slideUp();
          $li.find(".arrow").removeClass("open");
        }
      }else{
        var index =$li.index(); 
        gotoMenu(index,$li.attr("data-src"));
        $li.siblings().removeClass("active").find("dl").slideUp();
        $li.siblings().find(".arrow").removeClass("open");
      } 
    }); 

    $("#p_index_container").on("mouseenter","#pc_leftmenus li .p-simple",function(){ 
        var  $bg=$(this).find(".bg"); 
        $bg.animate({"width":"60px"},200);
    });

    $("#p_index_container").on("mouseleave","#pc_leftmenus li .p-simple",function(e){ 
         var  $bg=$(this).find(".bg"); 
        $bg.animate({"width":"2px"},200);       
    });

    $("#p_index_container").on("click","#pc_leftmenus li dd",function(e){
        var liindex = $(this).parents("li").index();
        $(this).parents("ul").find("dd").removeClass("active");
        $(this).addClass("active");
        gotoMenu(liindex,$(this).attr("data-src"));
    });     
}

function gotoMenu(index,src){
    if(!$("#pc_leftmenus li").eq(index).addClass("active")){
      $("#pc_leftmenus li").eq(index).addClass("active").siblings().removeClass("active");
    }
    
    $.ajaxSetup({cache : false});
    if (src!="") {
      $("#pc-home-container").empty().load(
          src,
          null,
          function(result, status, text){
          if (status == 'error') {
              // $("#bj_main_container").load("/error/404.jsp");
              $("#pc-home-container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
          }
      });
    } else{
            $("#pc-home-container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
    };
    return false;
}
function changeAdmin(guestfalg,src){
  if(guestfalg){
    $("#p_index_container").addClass("guest").load(src);
    $(".phead_links .com-ico").hide();
  }else{
    $("#p_index_container").removeClass("guest").load(src);
    $(".phead_links .com-ico").show();
  }
}
  /*
 *  tabs 选项卡切换功能
 *  @param {string} menuItem     // 选项卡菜单元素
 *  @param {string} menuClass   // 选项卡菜单元素选中class
 *  @param {string} contentItem   //内容 元素
 *  @param {string} eventType : "click" or "mouseenter"
 *  @param {function}callbackfn  回调函数  选项卡切换后执行的函数
*/
/*ex
  $("#contentbox").tabs({
    menuItem: ".menus li",
    menuClass: "active",
    contentItem: ".contents .content-item",
    eventType: "mouseenter",
    callbackfn:null
  });
*/
 $.fn.tabs = function (setting){
    var $tabs= $(this);
    var $menuItem = $tabs.find(setting.menuItem);
    var menuClass = setting.menuClass

    var $contentItem =$tabs.find(setting.contentItem);
    var eventType = setting.eventType;

    $menuItem.on(eventType,function(){
         $(this).addClass(menuClass).siblings().removeClass(menuClass);
         $contentItem.eq($(this).index()).show().siblings(setting.contentItem).hide();

         if(setting.callbackfn!=null){
            setting.callbackfn($(this).index());
         }
    }).eq(0).trigger(eventType);
    $menuItem.eq(0).addClass(menuClass).siblings().removeClass(menuClass);
    $contentItem.eq(0).show().siblings(setting.contentItem).hide();
 }

// 查询条件 折叠通用方法
function foldGlobal(){
  $("#p_index_container").on("click",".search_condition .fold",function(){
    var $content =$(this).parents(".search_condition").find(".fold_content");
      if(!$(this).hasClass("up")){
        $content.slideUp();
        $(this).addClass("up");
      }else{
        $content.slideDown();
        $(this).removeClass("up");
      }     
  });

}

function anmiateIco(_this){   
  var $anmi_ico = $(_this).parent("").find(".anmi_ico");
  var h = $(_this).parent("").height();   
  TweenMax.fromTo($anmi_ico,1,{
    top:-10,
    alpha:1,
    scale:0.8,
    ease:Power3.easeOut
  },{
    top:-h+3,
    alpha:0,
    scale:1,
  });
}



