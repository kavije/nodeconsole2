(function () {
    'use strict';
    
    angular.module('app').factory('currencyFactory', ['$http', function ($http) {
            var factory = {};
            
            factory.getCurrency = function (fromcur,tocur) {
                console.log("from the factory");
                return $http.get('/api/currency/'+ fromcur+'/'+tocur);
            }
            
            return factory;

        }]);
})(window.angular);