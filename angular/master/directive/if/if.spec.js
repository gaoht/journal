describe("if directive", function(){
    var $compile, scope;
    beforeEach(module("directives"));
    beforeEach(inject(function(_$compile_, $rootScope){
        $compile = _$compile_;
        scope = $rootScope;
    }))
    it('creates or removes the element as the if condition changes',
        function () {
           var element = $compile(
                '<div><div if="someVar"></div></div>')(scope);
            scope.$apply('someVar = true');
            expect(element.children().length).toBe(1);
            scope.$apply('someVar = false');
            expect(element.children().length).toBe(0);
            scope.$apply('someVar = true');
            expect(element.children().length).toBe(1);
    });
})