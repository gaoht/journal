describe("datepicker test", function(){
    var aDate, element, $scope;
    var selectDate = function(element, date) {
        element.datepicker('setDate', date);
        $.datepicker._selectDate(element);
    };
    beforeEach(module("directives"));
    beforeEach(inject(function($compile, $rootScope){
        aDate = new Date(2013, 11, 4);
        $scope = $rootScope;
        element = $compile("<input date-picker ng-model='x'/>")($scope);
    }));
    it('should get the date from model', function(){
        $scope.x = aDate;
        $scope.$digest();
        expect(element.datepicker('getDate')).toEqual(aDate);
    })
    it('should put the date in the model', function(){
        $scope.$digest();
        selectDate(element, aDate);
        expect($scope.x).toEqual(aDate);
    })
})