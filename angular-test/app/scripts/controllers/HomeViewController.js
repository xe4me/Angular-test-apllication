app.controller('HomeViewController', ["$scope" ,"DataFactory", function($scope,DataFactory) {
    $scope.page = {
        title: "Home"
    };
    var promise  = DataFactory.getData('app/scripts/json/data.json')
    .then(function(data){
    	console.log(data.data);
        $scope.user = data.data;
    });
}])

.controller('FormController', ["$scope", "$http","FormFactory","$state",function($scope, $http,FormFactory,$state) {
  
    $scope.submitted = false;
    $scope.submit = function(userForm) {
      $scope.submitted = true;
      if(userForm.$error.required){
        console.log("Error");
      }else{
        $scope.isLoading = true;
        var promise  = FormFactory.postData('app/api/user/',$scope.user ); // ofcourse we need a restful api to handle this 
        promise.then(function(){
            $scope.isLoading = false;
            $state.go("submitted");

        }, function(){
            $scope.isLoading = false;
            // if failed
        })
      }
    };
    $scope.interacted = function(field) {

      return ($scope.submitted || field.$dirty) && field.$error.required;
    };
}])


  