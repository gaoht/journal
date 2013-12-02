angular.module('G11N', []).factory('Lang', function($http, $q){
    var service = {};
    languagePack = {
        length: 0
    };
    function loadLanguages(url, index, defer){
        if(!url){
            languagePack[index] = {};
            languagePack.length++;
            if(languagePack.length === 3){
                defer.resolve($.extend(true, {}, languagePack[0], languagePack[1], languagePack[2]));
                languagePack = { length: 0 };
            }
        }else{
            $http.get(url).success(function(a){
                languagePack[index] = a;
                languagePack.length++;
                if(languagePack.length === 3){
                    defer.resolve($.extend(true, {}, languagePack[0], languagePack[1], languagePack[2]));
                    languagePack = { length: 0 };
                }
            }).error(function(){
                languagePack[index] = {};
                languagePack.length++;
                if(languagePack.length === 3){
                    defer.resolve($.extend(true, {}, languagePack[0], languagePack[1], languagePack[2]));
                    languagePack = { length: 0 };
                }
            });
        }
    }
    service.rule = {
        zh_CN: ['zh_CN', 'zh'],
        zh_TW: ['zh_TW', 'zh'],
        fr_CA: ['fr_CA', 'fr']
    };
    service.addRule = function(rule){
        service.rule.push(rule);
    };
    service.loadLanguage = function(lang){
        lang && (lang = lang.replace("-", "_"));
        var languagePack = [];
        var defer = $q.defer();
        var rule = service.rule[lang];
        languagePack.push("nls/locale.json");
        if(service.rule[lang]){
            for(var i=rule.length-1; i>=0; i--){
                languagePack.push("nls/locale_"+rule[i]+".json");
            }
        }
        while(languagePack.length < 3){
            languagePack.push(false);
        }
        angular.forEach(languagePack, function(url, i){
            loadLanguages(url, i, defer);
        });
        return defer.promise;
    };
    return service;
})