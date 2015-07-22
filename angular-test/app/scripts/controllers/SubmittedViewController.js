app.controller('SubmittedViewController', ["$scope","$stateParams", function($scope,$stateParams) {
    $scope.page = {
        title: "Submitted"
    };
    console.log($stateParams);
    
}])
