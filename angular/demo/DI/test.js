//angular.bootstrap(document, []);

//console.log(ng.get("aDirective"));
angular.module('module1', []).provider('greeter', function() {
    this.$get = function(){
        return {
            greet: function(text) {
                console.log("hello,"+text);
            }
        }
    };
//    return {
//        $get: function(){
//            return {
//                greet: function(text) {
//                    console.log("hello,"+text);
//                 }
//            }
//        }
//     }
}).run(function(greeter){
        greeter.greet("module1 loaded")
    });
angular.module('module1.factory', []).factory('greeter', function() {
    return {
        greet: function(text) {
            console.log("hello,"+text);
        }
    }
});
angular.module('module1.value', []).value('greeter',  {
        greet: function(text) {
            console.log("hello,"+text);
        }
    }
);
    angular.module('module2', []).service('greeter', function() {
        return {
            "greet": function(text){
                window.alert("hi,"+text);
            }
        }
//        this.greet = function(text) {
//                window.alert("hi,"+text);
//        };
//        this.test = function(){
//            alert("test'")
//        }
    });
var injector = angular.injector(["module1"/*, 'module2'*/]);
injector.get("greeter").greet("Angular1");
injector.invoke(function(greeter){
    greeter.greet("Angular2");
})
injector.invoke(["greeter", function(arg){
    arg.greet("Angular3");
}])

