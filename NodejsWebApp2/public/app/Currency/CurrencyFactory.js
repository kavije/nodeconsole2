(function () {
    'use strict';
    
    angular.module('app').factory('currencyFactory', ['$http', function ($http) {
            var factory = {};
            
            factory.getCurrency = function (fromcur,tocur) {
                return $http.get('/api/currency/'+ fromcur+'/'+tocur);
            }
            
            factory.getMapdata = function() {
              return $http.get('/api/mapdata');
               
            }
        return factory;

        }]);
})(window.angular);