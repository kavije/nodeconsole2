

var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
        
        $routeProvider.when('/', {
            controller: 'currencyController',
            templateUrl: 'app/Currency/CurrencyPartial.html'
        })
        
    .otherwise({ redirectTo: '/' });

    }]);


angular.module('app').directive('gChart', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attr) {
            var chart = new google.visualization.LineChart(document.getElementById('chartdiv'));

            chart.draw(scope.chart.data, scope.chart.options);
        }
    }

   

});




angular.module('app').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                
                event.preventDefault();
            }
        });
    };
});

app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});