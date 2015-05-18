
(function() {
    'use strict';


    google.load('visualization', '1', { packages: ['corechart'] });
    google.setOnLoadCallback(function() {
        angular.bootstrap(document.body, ['myApp']);
    });

    angular.module('app').controller('currencyController', [
        '$scope', 'currencyFactory', '$filter', '$location', function($scope, currencyFactory, $filter, $location) {

            function calculate() {
                
                //callback function which obtains currency data fom the factory
                   currencyFactory.getCurrency($scope.foo.id, $scope.toCurrency.id).success(function(data, status, headers, config) {
                    $scope.convertedValue = JSON.parse(data);
                    $scope.initial = $scope.convertedValue;
                    $scope.convertCurValue = 1;
                    console.log($scope.convertedValue);
                }).error(function(data, status, header, config) {});
                

                //callback function which obtains map data from the factory
                var mapdata1 = [];
                $scope.array = [];
                currencyFactory.getMapdata().success(function(result) {
                    mapdata1 = result;
                    $scope.array = $.map(mapdata1, function(value, index) {
                        return [value];
                    });
                    mapdata();
                    console.log($scope.array);

                });


            }
            
            
            //Function for drawing maps
            function mapdata() {

                var data = new google.visualization.DataTable();
                data.addColumn('string', 'X');
                data.addColumn('number', 'y');

                data.addRows($scope.array);
                var options = {
                    hAxis: {
                        showTextEvery: 12,
                        textStyle: {
                            fontSize: 12,
                            fontName: 'Arial',
                            color: "#878787"
                        }

                    },
                    vAxis: {
                        showTextEvery: 20,
                        textStyle: {
                            fontSize: 12,
                            fontName: 'Arial',
                            color: "#878787"
                        },
                        viewWindowMode: 'explicit',
                        viewWindow: {
                            min: 10,

                        },
                        gridlines: { count: 4 }

                    },
                    legend: 'none'

                };

                var chart = {};

                chart.data = data;
                chart.options = options;
                $scope.chart = chart;

                var chart1 = new google.visualization.LineChart(document.getElementById('chartdiv'));

                chart1.draw($scope.chart.data, $scope.chart.options);

            }

            function init() {
                $scope.currencyList = [
                    { id: 'AUD', value: 'Australian Dollar' },
                    { id: 'USD', value: 'US Dollar' },
                    { id: 'NZD', value: 'Newzealand Dollar' },
                    { id: 'EURO', value: 'Euro' },
                    { id: 'POUND', value: 'British Pound' }
                ];
                $scope.foo = $scope.currencyList[0];
                $scope.toCurrency = $scope.currencyList[1];
                calculate();
                $scope.initial = $scope.convertedValue;
               


            }

            init();
            
            //function handling dropchanges
            $scope.changed = function() {
                calculate();
            }
            
            //function handing textbox changes
            $scope.change1 = function() {
                console.log($scope.convertCurValue);
                $scope.convertedValue = (Number($scope.convertCurValue)) ? ($scope.convertCurValue * $scope.initial).toFixed(2) : "";
            }
            $scope.change2 = function() {
                $scope.convertCurValue = (Number($scope.convertedValue)) ? ($scope.convertedValue / $scope.initial).toFixed(2) : "";
            }
        }
    ]);

})(window.angular);