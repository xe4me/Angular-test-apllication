
angular.module("routes",[])
.constant('routes',{
    defaultRoutePath: '/home',
    routes:
        {
    	'home':{
            url: "/home",
            templateUrl: 'app/views/pages/home.html',
            controller: "HomeViewController",
            params:[]
        },
    	'submitted':{
            url: "/submitted",
            templateUrl: 'app/views/pages/home_submitted.html',
         	controller: "SubmittedViewController"   
	    }
        
    }
})

