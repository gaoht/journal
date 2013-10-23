
function angularInit(element, bootstrap) {
    var elements = [element],
        appElement,
        module,
        names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
        NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;

    function append(element) {
        element && elements.push(element);
    }
    //获取所有ng-app
    forEach(names, function(name) {
        names[name] = true;
        append(document.getElementById(name));
        name = name.replace(':', '\\:');
        if (element.querySelectorAll) {
            forEach(element.querySelectorAll('.' + name), append);
            forEach(element.querySelectorAll('.' + name + '\\:'), append);
            forEach(element.querySelectorAll('[' + name + ']'), append);
        }
    });

    forEach(elements, function(element) {
        if (!appElement) {
            var className = ' ' + element.className + ' ';
            var match = NG_APP_CLASS_REGEXP.exec(className);
            if (match) {
                appElement = element;
                module = (match[2] || '').replace(/\s+/g, ',');
            } else {
                forEach(element.attributes, function(attr) {
                    if (!appElement && names[attr.name]) {
                        appElement = element;
                        module = attr.value;
                    }
                });
            }
        }
    });
    if (appElement) {
        bootstrap(appElement, module ? [module] : []);
    }
}