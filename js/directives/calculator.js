/* jshint laxcomma:true */

var app = angular.module('Calculator');

app.directive('calculator', function () {
  return {
    restrict: 'C',
    templateUrl: '/templates/calc.html',
    scope: {},
    controller: 'CalculatorCtrl'
  };
});



