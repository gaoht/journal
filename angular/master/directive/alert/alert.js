angular.module("directives", [] ).directive('alert', function(){
    return {
        restrict:'E',
        replace: true,
        transclude: true,
        template:
            '<div class="alert alert-{{type}}">' +
                '<button type="button" class="close"' +
                'ng-click="close()">&times;' +
                '</button>' +
                //'<span>look at {{type}}</span>'+
                '<div ng-transclude></div>' +
                '</div>',
        scope: { type:'=', close:'&' }
    };
})
