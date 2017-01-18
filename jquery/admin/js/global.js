 $(function(){
    menuInit();//初始化
    setHeight();
    placeHolder_Init();

    /* tab功能*/
  $.fn.tabs = function (options) {
    var settings = {
    tabList: "",
    tabContent: "",
    tabOn:"",
    action: ""
    };
    var _this = $(this);
    if (options) $.extend(settings, options);
    _this.find(settings.tabContent).eq(0).show().siblings().hide(); 
    _this.find(settings.tabList).eq(0).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
    if (settings.action == "mouseover") {
         _this.find(settings.tabList).each(function (i) {
             $(this).mouseover(function () {
             /* time();*/
             $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
             var _tCon = _this.find(settings.tabContent).eq(i);
            _tCon.show().siblings().hide();
         }); //滑过切换
      });
    }
    else if (settings.action == "click") {
        _this.find(settings.tabList).each(function (i) {
            $(this).click(function () {
                $(this).addClass(settings.tabOn).siblings().removeClass(settings.tabOn);
                var _tCon = _this.find(settings.tabContent).eq(i);
                _tCon.show().siblings().hide();
            }); 
        });
    };
  };
 /* tab功能end*/
 });
$(window).resize(function(){
    setHeight();
});

function setHeight(){
    var min_h =$(window).height()-$(".head-container").height()-5-$(".footer").height();
        // min_h =Math.max(min_h,720);
    $("#home-container").css({"min-height":min_h});
}
 
  
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
          $("#mainMenus li").eq(_menusindex).trigger("click");
      } 
  }else{
      $("#mainMenus li").eq(0).trigger("click"); 
  }
 
}
function menuEvent(){
    $("#mainMenus").on("click","li",function(){
        var index =$(this).index(); 
        gotoMenu(index,$(this).attr("data-src"));
    });    
}

function gotoMenu(index,src){
    $("#mainMenus li").eq(index).addClass("active").siblings().removeClass("active");
    $.ajaxSetup({cache : false});
    if (src!="") {
      $("#home-container").empty().load(
          src,
          null,
          function(result, status, text){
          if (status == 'error') {
              // $("#bj_main_container").load("/error/404.jsp");
              $("#home-container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");
          }
      });
    } else{
            $("#home-container").html("<center><h1 style='font-size:100px;line-height:300px;color:orange;'>404</h1></center>");

    };
    placeHolder_Init();
    return false;
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
 $.fn.tabsfn = function (setting){
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

/*placeHolder fix IE8*/
//判断浏览器是否支持placeholder属性
// var supportPlaceholder = 'placeholder' in document .createElement('input'),

// var placeholder = function(input) {

//     var text = input.attr('placeholder'), defaultValue = input.defaultValue;

//     if (!defaultValue) {  
//       input.val(text).addClass("phcolor");
//     }
//       input.focus(function() {
//         if (input.val() == text) {  
//         $(this).val("");
//       }
//     });

//     input.blur(function() {
//         if (input.val() == "") {
//           $(this).val(text).addClass("phcolor");
//         }
//     });

//     //输入的字符不为灰色
//     input.keydown(function() {
//       $(this).removeClass("phcolor");
//     });
// };
function placeHolder_Init(){
  //当浏览器不支持placeholder属性时，调用placeholder函数
    // if (!supportPlaceholder) {
    //     $('input').each(function() {
    //         if ($(this).attr("type") == "text") {
    //           placeholder($(this));
    //         }
    //     });
    // }
}

//动画


  




