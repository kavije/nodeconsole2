
(function () {
    
    
    'use strict';
    
    
    google.load('visualization', '1', { packages: ['corechart'] });
    
    google.setOnLoadCallback(function () {
        angular.bootstrap(document.body, ['myApp']);
    });
    
    angular.module('app').controller('currencyController', ['$scope', 'currencyFactory', '$filter', '$location', function ($scope, currencyFactory, $filter, $location) {
            
            
            
        function calculate() {
           // debugger;
                currencyFactory.getCurrency($scope.foo.id,$scope.toCurrency.id).success(function (data, status, headers, config) {
                    
                    $scope.convertedValue = JSON.parse(data);
                    $scope.initial = $scope.convertedValue;
                    $scope.convertCurValue = 1;
                    //$rootScope.test = data;
                    console.log("i am success");
                    console.log($scope.convertedValue);
                }).error(function (data, status, header, config) { });

        }    
            
            function mapdata() {
              
                
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'X');
                data.addColumn('number', 'y');
                
                data.addRows([
                    
                    
                    ["2011", 20], ["2011", 27], ["2011", 33], ["2011", 40], ["2011", 32], ["2011", 35],
                    ["2012", 30], ["2012", 40], ["2012", 42], ["2012", 47], ["2012", 44], ["2012", 48],
                    ["2013", 52], ["2013", 54], ["2013", 42], ["2013", 55], ["2013", 56], ["2013", 57],
                    ["2014", 60], ["2014", 50], ["2014", 52], ["2014", 51], ["2014", 49], ["2014", 53],
                    ["2015", 55], ["2015", 60], ["2015", 61], ["2015", 59], ["2015", 62], ["2015", 65]
                    


                ]);
                


                
                var options = {
                    hAxis: {
                       
                        showTextEvery: 6
                    }
                   
                    

                    //backgroundColor: '#f1f8e9'
                };

                var chart = {};
                
                chart.data = data;
                chart.options = options;
                $scope.chart = chart;

            }

            function init() {
                $scope.currencyList = [
                    { id: 'AUD', value: 'Australian Dollar' },
                    { id: 'USD', value: 'US Dollar' },
                    { id: 'IND', value: 'Indian Rupee' }
                ];
                $scope.foo = $scope.currencyList[0];
               // $scope.a = 1;
                 $scope.toCurrency= $scope.currencyList[1];
                console.log($scope.foo);
                console.log($scope.toCurrency);
                calculate();
                //$scope.a = 1;
                console.log($scope.convertCurValue);
                $scope.initial = $scope.convertedValue;
                $scope.chartType = 'line';
               
                mapdata();
            }

            init();
        $scope.changed=function() {
                console.log($scope.foo);
                console.log($scope.toCurrency);
               calculate();
            }

            $scope.change1 = function () {
                console.log($scope.convertCurValue);
              $scope.convertedValue = ($scope.convertCurValue)? ($scope.convertCurValue * $scope.initial).toFixed(2):"";
            }
            $scope.change2 = function () {
                $scope.convertCurValue = ($scope.convertedValue)? ($scope.convertedValue/ $scope.initial).toFixed(2):"";
            }
    }]);

})(window.angular);