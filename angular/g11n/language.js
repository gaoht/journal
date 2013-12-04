angular.module('G11N', []).provider('Lang', function(){
    var localeFolder = 'nls';
    var localeFilePrefix = "locale";
    var localeFileExtension = "json";
    var baseLocaleName = "locale";
    var localeRule = {};
    /**
     * set the localized bundles resource folder
     * @param folder{String}
     */
    this.localeFolder = function(folder){
        localeFolder = folder || localeFolder;
    };
    /**
     * set the localized file name prefix
     * @param prefix{String}
     */
    this.localeFilePrefix = function(prefix){
        localeFilePrefix = prefix || localeFilePrefix;
    };
    /**
     * set the localized file extension
     * @param ext{String}
     */
    this.localeFileExtension = function(ext){
        localeFileExtension = ext || localeFileExtension;
    };
    /**
     * set the base locale file name
     * @param name{String}
     */
    this.baseLocaleName = function(name){
        baseLocaleName = name || baseLocaleName;
    }
    /**
     * set the locale rule
     * @param name{String}
     */
    this.localeRule = function(rule){
        localeRule = rule || localeRule;
    }

    this.$get = ['$http', '$q',
        function($http, $q){
        var service = {
            rule: localeRule
        },  languagePack = {
            length: 0
        };
        /**
         * load specified language resource
         * @param lang
         * @returns {promise}
         */
        service.loadLanguage = function(lang){
            var languageUrl = [],
            defer = $q.defer();
             //convert '-' to '_'
            lang && (lang = lang.replace("-", "_"));
            rule = service.rule[lang];
            languageUrl.push(localeFolder + "/" + baseLocaleName + "." +localeFileExtension);
            if(rule){
                for(var i=rule.length-1; i>=0; i--){
                    languageUrl.push(getFilePath(service.rule[lang][i]));
                }
            }
            while(languageUrl.length < 3){
                languageUrl.push(false);
            }
            angular.forEach(languageUrl, function(url, i){
                loadLanguages(url, i, defer);
            });
            return defer.promise;
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
        function getFilePath(language){
            return localeFolder + "/" + localeFilePrefix + "_" + language + "." + localeFileExtension;
        }
        return service;
   }];
})
