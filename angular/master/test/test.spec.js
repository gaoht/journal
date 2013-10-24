ddescribe("Angular mocks test", function(){
    beforeEach(function(){
        module();
        inject();
    })
    it("Injected modules test", function(){
        expect(jasmine.getEnv().currentSpec.$modules).toEqual(["ng", "ngMock"])
    })
    it("Injector invoke test", function(){
        expect(jasmine.getEnv().currentSpec.$injector.invoke(function(){
            return 2;
        })).toEqual(2)
    })
})