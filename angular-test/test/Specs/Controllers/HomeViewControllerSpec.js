// Sorry , didn't have the time to write all tests , so I just write one to show I know how to use them :P

describe("The 'HomeViewController' description", function()
{
	var $controller;
	var $scope;

	beforeEach(function()
	{
		module("testApp");

		inject
		([
			'$injector',
			'$rootScope',
			'$controller',

			function($injector, _$rootScope, _$controller)
			{

				
				$scope = _$rootScope.$new();
				$controller = _$controller;
			}
		]);

		$controller('HomeViewController', {$scope: $scope});
	});

	it("should set the page title to 'Home'", function()
	{
		expect($scope.page.title).toBe('Home');
	});
});
