var provideTest = angular.module("ProvideTest", []).provider("testProvider", function($provide){
    $provide.provider("test", function(){
        this.test = function(){
            alert("test")
        }
        this.$get = function(){
            return {
                "test": this.test
            }
        }
    });
    return {
        $get: function(){
            return {
                "test": function(){
                    alert("testProvider")
                }
            }
        }
    }
})
var injector = angular.injector(["ProvideTest"]);
injector.get("test").test();
injector.get("testProvider").test();
