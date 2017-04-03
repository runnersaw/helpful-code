(function(){
  //initialize the angular app and inject dependencies.
  angular.module("mean.service", [])
    .service('meanservice', function() {
      var _variable = 0;

      return {
        reset: function(reload) {
          // Destroy all saved variables
          _variable = 0;
        },
        getVariable: function() {
          return _variable;
        },
        setVariable: function(variable) {
          _variable = variable;
        }
      }
    });
})();
