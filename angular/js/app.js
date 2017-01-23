var routerApp = angular.module('routerApp', 
        [
             'ui.router',
             'utils',
             'HomeModule'
         ]
    );
/**
 * 方便获得当前状态的方法，绑到根作用域。
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider路由重定向
 * @return {[type]}
 */
routerApp.config(function($stateProvider, $urlRouterProvider) { 
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '^/index',
            views: {
                '': {
                    templateUrl: 'view/pc_index.html'
                },
                'mainLeft@index': {
                    templateUrl: 'view/pc_index_center.html'
                },
                'mainRight@index': {
                    templateUrl: 'view/pc_home.html'
                }
            }
        });

    var hm = [  'home',
                'h_rubbish',//垃圾桶
                'h_messagecenter',//消息中心
                'h_advice',//意见建议
                //左侧菜单开始：
                'setting_writedata',//完善资料
                'setting_resetcode',//修改密码
                'finished_exercise',//已做题目
                'wrong_exercise',//错题集
                'exam_record',//模考记录
                'mycollect',//我的收藏
                'myquestions',//我的提问
                'r_record',//购买记录
                'r_leave',//请假记录
                'r_goods'//物流查询
             ];
         
        for(var i = 0;  i < hm.length; i++){
            $stateProvider.state('index.'+hm[i],{
                url:"^/"+hm[i],
                views:{
                'mainRight@index': {
                        templateUrl: 'view/pc_'+hm[i]+'.html'
                    } 
                }
             })      
        };
        $stateProvider.state('index.finished_exercise.detail', {
            url: '/index.finished_exercise.detail',
            views: { 
                'mainRight@index': {
                    templateUrl: 'view/pc_detail_exercise.html'
                } 
            }
        })   
        /*     
        .state('index.videoClass.detail', {
            url: '/{courseId:[0-9]{1,4}}',
            views:{
                'main@index': {
                    templateUrl: 'view/videoClassView.html'
                }
            }
        })   */

        // .state('register',{
        //     url:'/register',
        //     templateUrl: 'view/register.html'
        // })
        // .state('bookdetail', {
        //     url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
        //     templateUrl: 'view/bookDetail.html'
        // })
});

/** 
 * 路由权限验证管理
 * userInfo role
 * admin 新增书籍  
 * normal 只能查看
 * but 出于安全问题前端不涉及角色控制
 * 权限验证 expree movie 的 controllr 提到（慕课网） 
 */
