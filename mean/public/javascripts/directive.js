(function() {
  angular.module('mean.directive', [])
    .directive('directive', function() {
      return {
        restrict: 'E',
        templateUrl: './pages/directive.html',
        css: './css/directive.css'
      };
    });
})();
