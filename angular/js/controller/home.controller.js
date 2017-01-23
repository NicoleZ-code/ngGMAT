/**
 * 首页
 */

var homeModule = angular.module("HomeModule",[]);
//左侧菜单
homeModule.controller("indexLeftCtrl",function($scope, $http, $state, $stateParams){
	$scope.isShow1 = false;
	$scope.isShow2 = false;
	$scope.isShow3 = 0;
	$scope.setCurrent1 = function(){//账号设置
        $scope.isShow1 = !$scope.isShow1;
        $scope.isShow2 = false;
        $scope.isShow3 = 0;
	}
	$scope.setCurrent2 = function(){//历史购买
        $scope.isShow2 = !$scope.isShow2;
        $scope.isShow1 = false;
        $scope.isShow3 = 0;
	}
	$scope.setCurrent3 = function(param){
        $scope.isShow1 = false;
        $scope.isShow2 = false;
        $scope.isShow3 = param;
	}
})
//折叠功能
.controller("searchConditionCtrl",function($scope, $http, $state, $stateParams){
	$scope.conditionShow = true;
	$scope.conditionToggle = function(){
		$scope.conditionShow = !$scope.conditionShow;
	}
})
//已做题目
.controller("exerciseCtrl",function($scope, $http, $state, $stateParams){
	$http.get("data/finishedExercise.json")
	.success(function(data){
		$scope.datas = data;
	});
})
//已做题目详情页
.controller("exerciseDetailCtrl",function($scope, $http, $state, $stateParams){
	$scope.isShow = false;
	$scope.isToggle = function(){
		$scope.isShow = !$scope.isShow;
	}
})