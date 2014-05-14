/* jshint laxcomma:true */

var app = angular.module('Calculator');


app.controller('CalculatorCtrl', function ($scope) {
  var DIGIT = /^[0-9]$/
    , OP = /^[×\/+-]$/;

  var stack = []
    , restart = false
    , memory = 0
    , i;

  $scope.value = 0;

  this.exec = function execCommand(name) {
    if (DIGIT.exec(name)) {
      if (restart) {
        $scope.value = name|0;
        restart = false;
      } else {
        $scope.value = ($scope.value * 10) + (name|0);
      }
    } else {
      switch (name) {
        case 'C':
          $scope.value = 0;
          break;
        case 'MC':
          memory = null;
          break;
        case 'M+':
          memory = $scope.value;
          break;
        case 'M-':
          memory = -1 * $scope.value;
          break;
        case 'MR':
          $scope.value = memory|0;
          break;
        case '=':
          stack.push($scope.value|0);
          $scope.value = 0;

          for (i = 0; i < stack.length; ++i) {
            if (OP.exec(stack[i])) {
              if ('+' == stack[i]) {
                $scope.value = stack[i+1] + stack[i+2];
              } else if ('-' == stack[i]) {
                $scope.value = stack[i+1] - stack[i+2];
              } else if ('×' == stack[i]) {
                $scope.value = stack[i+1] * stack[i+2];
              } else if ('/' == stack[i]) {
                $scope.value = stack[i+1] / stack[i+2];
              }

              i += 2;
            }
          }

          stack = [];
          break;
        case '+-':
          $scope.value = -1 * $scope.value;
          restart = true;
          break;

        case '×':
        case '/':
        case '+':
          stack.push(name);

          if (!restart) {
            stack.push($scope.value);
          }

          restart = true;
          break;
      }
    }
  };
});

app.directive('calculator', function () {
  return {
    restrict: 'C',
    templateUrl: '/templates/calc.html',
    scope: {},
    controller: 'CalculatorCtrl'
  };
});



