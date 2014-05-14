/* jshint laxcomma:true */

var app = angular.module('Calculator');

app.controller('CalculatorCtrl', function ($scope, CalculatorTool) {
  this.calculator = $scope.calculator = new CalculatorTool();
});


