angular.module("directives", []).directive("pagination", function(){
    return {
        restrict: "E",
        scope: {
            numPages: "@",
            currentPage: "=",
            onSelectPage: "&"
        },
        template: '<div class="pagination"><ul>' +
            '<li ng-class="{disabled: noPrevious()}"><a ng-click="selectPrevious()">Previous</a></li>' +
            '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
            '<li ng-class="{disabled: noNext()}"><a ng-click="selectNext()">Next</a></li>' +
            '</ul><input ng-model="numPages">' +
            '</div>',
        replace: true,
        link: function(scope, element, attrs){
            scope.$watch('numPages', function(value){
                var pages = scope.pages = [];
                for(var i=1; i<=value; i++){
                    pages.push(i);
                }
                if(scope.currentPage > value){
                    scope.selectPage(value);
                }
            });
            scope.isActive = function(page){
                return scope.currentPage == page;
            }
            scope.selectPage = function(page){
                if(!scope.isActive(page)){
                    scope.currentPage = page;
                    scope.onSelectPage({ page: page });
                }
            }
            scope.noNext = function(){
                return scope.currentPage == scope.numPages;
            }
            scope.noPrevious = function(){
                return scope.currentPage == 1;
            }
            scope.selectNext = function(){
                if(!scope.noNext()){
                    scope.selectPage(parseInt(scope.currentPage) + 1);
                }
            }
            scope.selectPrevious = function(){
                if(!scope.noPrevious()){
                    scope.selectPage(parseInt(scope.currentPage) - 1);
                }
            }
        }
    }
})
angular.module("directives1", []).directive("pagination", function(){
    return {
        restrict: "E",
        scope: {
            numPages: "@",
            currentPage: "=",
            onSelectPage: "&"
        },
        template: '<div class="pagination"><ul>' +
            '<li ng-class="{disabled: noPrevious()}"><a ng-click="selectPrevious()">Previous</a></li>' +
            '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
            '<li ng-class="{disabled: noNext()}"><a ng-click="selectNext()">Next</a></li>' +
            '</ul>' +
            '</div>',
        replace: true,
        controller: function($element, $attrs, $scope){
            var scope = $scope;
            scope.$watch('numPages', function(value){
                var pages = scope.pages = [];
                for(var i=1; i<=value; i++){
                    pages.push(i);
                }
                if(scope.currentPage > value){
                    scope.selectPage(value);
                }
            });
            scope.isActive = function(page){
                return scope.currentPage == page;
            }
            scope.selectPage = function(page){
                if(!scope.isActive(page)){
                    scope.currentPage = page;
                    scope.onSelectPage({ page: page });
                }
            }
            scope.noNext = function(){
                return scope.currentPage == scope.numPages;
            }
            scope.noPrevious = function(){
                return scope.currentPage == 1;
            }
            scope.selectNext = function(){
                if(!scope.noNext()){
                    scope.selectPage(parseInt(scope.currentPage) + 1);
                }
            }
            scope.selectPrevious = function(){
                if(!scope.noPrevious()){
                    scope.selectPage(parseInt(scope.currentPage) - 1);
                }
            }
        }
    }
})