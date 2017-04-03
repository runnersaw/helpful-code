(function(){
  //initialize the angular app and inject dependencies.
  angular.module("mean.controller", [
    'ngRoute',
    'mean.service'
  ])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './pages/main.html',
          controller: 'MeanController',
          controllerAs: 'vm',
          css: './css/main.css'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })
    .controller('MeanController', ['$http', '$window', 'meanservice', MeanController]);

  function MeanController($http, $window, meanservice) {
    var vm = this;

    vm.service = meanservice;
  }
})();
