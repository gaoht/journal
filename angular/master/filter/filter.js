angular.module("FilterModule", []).controller("RecordsController", function($scope){
    $scope.records = [];
    for(var i=0; i<100; i++){
        $scope.records[i] = i+1;
    }
}).filter('pagination', function(){
    return function(inputArray, selectedPage, pageSize) {
        var start = selectedPage*pageSize;
        return inputArray.slice(start, start + pageSize);
    };
});
describe("Test Pagination filer", function(){
    var pageFilter, $scope;
    beforeEach(module("FilterModule"));
    beforeEach(inject(function(_paginationFilter_, $rootScope){
        pageFilter = _paginationFilter_;
        $scope = $rootScope.$new();
    }));
    it("should return a page of data", inject(function($controller){
        $controller("RecordsController", {
            "$scope": $scope
        });
        expect(pageFilter($scope.records, 2, 2)).toEqual([5,6]);
        expect(pageFilter($scope.records, 2, 10)).toEqual([21,22,23,24,25,26,27,28,29,30]);
    }))

})