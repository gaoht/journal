angular.module('G11N').config(['LangProvider', function(LangProvider){
    LangProvider.localeRule({
        zh_CN: ['zh_CN', 'zh'],
        zh_TW: ['zh_TW', 'zh'],
        fr_CA: ['fr_CA', 'fr']
    });
}])