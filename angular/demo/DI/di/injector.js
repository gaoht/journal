function createInjector(services){
    var loadedServices = {};
    loadSerivices(services);

    return {
        get: getService,
        invoke: invoke,
        instantiate: instantiate
    }

    function invoke(func, context, locals){
        var $inject = /*func.$inject;*/ annotate(func)
        var i, args = [];
        for(i=0; i<$inject.length; i++){
            args.push(locals && locals[$inject[i]] ? locals[$inject[i]]  : getService($inject[i]));
        }
        return func.apply(context, args);
    }

    function instantiate(func, locals){
        var constructor = function(){};
        constructor.prototype = func.prototype;
        var instance = new constructor();
        invoke(func, instance, locals);
        return instance;
    }

    function getService(name){
        return loadedServices[name];
    }

    function loadSerivices(services){
        for(var i=0; i<services.length; i++){
            loadedServices[services[i].$name] = new services[i]();
        }
    }

    function annotate(func){
        var ai = angular.injector();
        return ai.annotate(func);
    }
}

