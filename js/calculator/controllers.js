angular.module('Calculator').
controller('CalculatorCtrl', ['$scope', 'Calculator', function ($scope, Calculator) {
  var calc = this.calculator = new Calculator();

  $scope.value = 0;

  $scope.$watch(
    function () { return calc.value },
    function (value) { $scope.value = value; }
  );
}]);

