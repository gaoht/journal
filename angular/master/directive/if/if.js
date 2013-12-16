angular.module("directives", [] ).directive('if', function(){
    return {
        transclude: "element",
        compile: function(element, attr, transclude){
            return function postLink(scope, element, attr){
                var childElement, childScope;
                scope.$watch(attr['if'], function(newValue){
                    if(childElement){
                        childElement.remove();
                        childScope.$destroy();
                        childElement = undefined;
                        childScope = undefined;
                    }else{
                        childScope = scope.$new();
                        childElement = transclude(childScope, function(clone){
                            element.after(clone);
                        })
                    }
                });
            }
        }
    }
});