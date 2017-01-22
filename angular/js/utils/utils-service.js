'use strict'
//angular.module("routerApp",[])
  // .data("configImages/","public/images/")

/**
 * 搜索项
 */
var courseMoudle = angular.module('CourseModule',[]);
courseMoudle.factory('searchService', ['$http',function($http) {
        var item = {
            "id":"",
            "imgurl":"",
            "name":"",
            "unit":"",
            "date":"",
            "detail":"",
            "time":"",
            "teacher":"",
            "signnum":"",
            "left_signnum":0
        }; 
        var doRequest = function(id,path) {
            return $http({
                method: 'GET',
                url: path,
                data:id
            }); //模拟携带参数 
        }
        var getItemsByParams = function(params,path){
            var _params =  {
                time:"",
                coursename:"",
                catalogue:"",
                class:""
            }
            _params = angular.copy(params,_params);

            return $http({
                method: 'get',//post
                url: path,
                data:_params
            }); //模拟携带参数待修改？？？
        }
        var getAllItems = function(path){
            return $http({
                method: 'get',
                url: path,
                data:{
                    all:true
                }
            }); 
        }
        return {
            init: function(){
                return item;
            },
            getItemById: function(id,path) {
                return doRequest(id,path);
            },
            getItemsByParams: function(params,path){
                return addBook(params,path);
            },
            getAllItems:function(path){
                return getAllItems(path);
            }
        };
    }
])
// .filter('intFormat',function(_int){
//     //格式化字符串
//     if (_int<9) {
//         return "0"+(_int+1);
//     }else{
//         return (_int+1);
//     }
// })