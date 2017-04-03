(function(){
	//initialize the angular app and inject dependencies.
	angular.module("mean", [
    'ngRoute',
    'angularCSS',
    'mean.controller',
    'mean.directive',
    'mean.service'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        templateUrl: '/pages/404.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
})();
