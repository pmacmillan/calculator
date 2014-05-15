angular.module('Calculator').
controller('CalculatorCtrl', ['Calculator', function (Calculator) {
  this.calculator = new Calculator();
}]);

