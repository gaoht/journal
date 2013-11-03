describe("Pagination directive", function(){
    var $scope,element, lis;
    beforeEach(module("directives"));
    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new();
        $scope.numPages = 5;
        $scope.currentPage = 3;
        element = $compile('<pagination num-pages="numPages" currentpage="currentPage"></pagination>')($scope);
        $scope.$digest();
        lis = function(){
            return element.find('li');
        }
    }));
    it('has the number of the page as text in each page item',
        function() {
            for(var i=1; i<=$scope.numPages;i++) {
                expect(lis().eq(i).text()).toEqual(''+i);
            }
    });
    it('sets the current-page to be active', function() {
        var currentPageItem = lis().eq($scope.currentPage);
        expect(currentPageItem.hasClass('active')).toBe(true);
    });
    it("next disabled if current-page is num-pages", function(){
        $scope.currentPage = 5;
        $scope.$digest();
        var nextPageItem = lis().eq(-1);
        expect(nextPageItem.hasClass('disabled')).toBe(true);
    })
    it("previous disabled if current-page is num-pages", function(){
        $scope.currentPage = 1;
        $scope.$digest();
        var prevPageItem = lis().eq(0);
        expect(prevPageItem.hasClass('disabled')).toBe(true);
    });
    it("current page changed if a page link is clicked", function(){
        var page3 = lis().eq(3).find('a').eq(0);
        page3.click();
        $scope.$digest();
        expect($scope.currentPage).toBe(3);
    })
    it("click next current-page will turn to next", function(){
        $.currentPage = 1;
        $scope.$digest();
        var nextPageItem = lis().eq(-1).find("a").eq(0);
        nextPageItem.click();
        expect(lis().eq(2).hasClass("active")).toBe(true);
    })
    it("click previous current-page will turn to previous", function(){
        $.currentPage = 2;
        $scope.$digest();
        var nextPageItem = lis().eq(0).find("a").eq(0);
        nextPageItem.click();
        expect(lis().eq(1).hasClass("active")).toBe(true);
    })
    //...
})