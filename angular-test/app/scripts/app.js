

var app = angular.module('testApp', ['routes','ui.router']);

app.config(['$urlRouterProvider','$stateProvider','$locationProvider','routes',
    function($urlRouterProvider,$stateProvider,$locationProvider,routes) {

        $locationProvider.hashPrefix('!');

        /*$stateProvider
                    .state("home", {
                        
                        url: '/home',
                        
                        
                        controller: "HomeViewController",
                        
                    });*/
        if (routes.routes !== undefined) {
            angular.forEach(routes.routes, function(route, state) {
                console.log(route, state);
                $stateProvider
                    .state(state, {
                        
                        url: route.url,
                        params: route.params,
                        templateUrl: route.templateUrl,
                        controller: route.controller
                        
                    });
            });
        }
        if (routes.defaultRoutePath !== undefined) {
            $urlRouterProvider.otherwise(routes.defaultRoutePath);
        }



    }
]);


app.controller('mainController', ['$scope', function($scope) {


}]);


