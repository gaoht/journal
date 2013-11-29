angular.module("directives", []).directive("field", function(){
    return {
        restrict: "E",
        priority: 100,
        terminal: true,
        compile: function(element, attrs){

        }
    }
});