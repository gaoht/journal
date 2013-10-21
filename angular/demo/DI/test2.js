
//        angular.bootstrap(document, []);
//        var ng = angular.injector(["ng"]);
//        console.log(ng.get("$compile"));
//        var controller1 = ng.get("$controller");
//        var controller2 = ng.get("$controller");
//        alert(controller1 === controller2);
//        ng = angular.injector(["ng"]);
//        controller2 = ng.get("$controller");
//        alert(controller1 === controller2);
//        ng.invoke(function($rootScope){
//            console.log($rootScope);
//            var scope1 = $rootScope.$new();
//            console.log(scope1);
//            var scope2 = $rootScope.$new();
//            console.log(scope2);
//            var scope3 = $rootScope.$new(true);
//            console.log(scope3);
//            $rootScope.$watch("aaa");
//        })