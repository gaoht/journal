angular.module("pagination-directive", []).directive("pagination", function(){
    return {
        restrict: "E",
        scope: {
            numPages: "@",
            currentPage: "@"
        },
        templateUrl: "pagination.tpl.html",
        replace: true,
        link: function(scope){
            console.log(scope);
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
                    scope.currentPage++;
                }
            }
            scope.selectPrevious = function(){
                if(!scope.noPrevious()){
                    scope.currentPage--;
                }
            }
        }
    }
})