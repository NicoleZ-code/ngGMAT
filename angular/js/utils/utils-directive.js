'use strict';
/**
 * 封装 通用组件
*/
angular.module('utils',[])

.directive('', ['', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    };
}])

/**
 * tab -right 选项卡
 */
.directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="commontabs">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<span ng-mouseenter="select(pane)">{{pane.title}}</span>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  })
 
  .directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })
  .directive('hoveritem', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs) {
        scope.isDetail = false;
      },
      template:
        '<span ng-class="{isDetail:isDetail}" ng-mouseenter="isDetail = true" ng-mouseleave="isDetail = false" ng-transclude>' +
        '</span>',
      replace: true
    };
  })
  .directive('single', function() {
    return {
      // require: '^hoveritem',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs) {
        
      },
      template:
        '<span class="single" ng-transclude>' +
        '</span>',
      replace: true
    };
  })
  .directive('detail', function() {
    return {
      // require: '^hoveritem',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs) {
        // tabsController.addPane(scope);
      },
      template:
        '<span class="detail" ng-transclude>' +
        '</span>',
      replace: true
    };
  }) 
/**
 * 树菜单
 */
.directive('tree',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 搜索项查询 search-options
 */

/**
 * 搜索菜单
 */
.directive('search',['',function(){
    return {
        restrict:'E',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])
/**
 * 折叠
 */
.directive('fold',['',function(){
    return {
        restrict:'E',
        replace:true,
        controller:function($scope, element, attrs){
          
        },
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 实体课程-列表展示 
 */
.directive('course-grid',['',function(){
    return {
        restrict:'E',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 视频课程-列表展示 
 */
.directive('video-grid',['',function(){
    return {
        restrict:'E',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])
/**
 * 测验考试 
 */

.directive('exame',['',function(){
    return {
        restrict:'E',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])
