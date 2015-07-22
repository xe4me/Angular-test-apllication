app.factory('FormFactory', ["$http",'$q',"$timeout", function($http,$q,$timeout) {
    
    return{
        postData:function(url,data){
        	var defer = $q.defer();
            /*return $http({
		        method: "Post",
		        url: url,
		        data:data
		    }).success(function(data){
		    	defer.resolve(data)
		    });*/


			// we dont have a database so I'll make fake the request
			var defer = $q.defer();
		      $timeout(function() {
		        
		            defer.resolve()
		            
		      }, 1000);
		      return defer.promise;
        }
    }
    
    
}]);


