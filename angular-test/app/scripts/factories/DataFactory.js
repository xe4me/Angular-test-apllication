app.factory('DataFactory', ["$http",'$q', function($http,$q) {
    
    return{
        getData:function(url){
        	var defer = $q.defer();
            return $http({
		        method: "GET",
		        url: url
		    }).success(function(data){
		    	defer.resolve(data)
		    });

		    return defer.promise;
        }
    }
    
    
}]);


