

angular.module('tipMod',['ionic'])

.controller('tipCtrl', function($scope, $http){
    
    // Function to fetch tips
    $http.get(app.js)
    .then(function(response){
        var rand=Math.floor(Math.random() * 10);
        var currentTip=myTips[rand];
        $scope.cTip=currentTip
    })
})

// Function to change background color
angular.module('bG', ['ionic'])
        .controller('backgroundCtrl',($scope), function($scope){
                // var rand=Math.floor(Math.random() * 2);
                  var rand =1;
                  if(rand==1){
                    $scope.randBackG = ".bG1";
                  }
              }
        )