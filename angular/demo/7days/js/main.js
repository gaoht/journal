var app = angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope) {
    $scope.playing = false;
    var audio = $scope.audio = document.createElement('audio');
    audio.src = "./media/recycle.wav";
    $scope.play = function(){
        $scope.playing = true;
        $scope.audio.play();
    }
    $scope.stop = function(){
        $scope.audio.pause();
        $scope.playing = false;
    }
    $scope.audio.addEventListener('ended', function() {
        $scope.$apply(function() {
            $scope.stop()
        });
    });
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);