

angular.module('tipMod',['ionic'])

.controller('tipCtrl', function($scope, $http){
    
    $http.get(app.js)
    .then(function(response){
        var rand=Math.floor(Math.random() * 10);
        var currentTip=myTips[rand];
        $scope.cTip=currentTip
    })
})