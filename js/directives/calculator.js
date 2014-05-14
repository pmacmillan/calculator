/* jshint laxcomma:true */

var app = angular.module('Calculator');

app.provider('CalculatorTool', function () {
  var DIGIT = /^[0-9]$/
    , OP = /^[×\/+-]$/;

  function CalculatorTool() {
    this.value = 0;
    this.stack = [];
    this.restart = false;
    this.memory = 0;
  }

  CalculatorTool.prototype.exec = function (command) {
    if (DIGIT.exec(command)) {
      if (this.restart) {
        this.value = command|0;
        this.restart = false;
      } else {
        this.value = (this.value * 10) + (command|0);
      }
    } else {
      switch (command) {
        case 'C':
          this.value = 0;
          break;
        case 'MC':
          this.memory = null;
          break;
        case 'M+':
          this.memory = this.value;
          break;
        case 'M-':
          this.memory = -1 * this.value;
          break;
        case 'MR':
          this.value = this.memory|0;
          break;
        case '=':
          this.stack.push(this.value|0);
          this.value = 0;

          for (i = 0; i < this.stack.length; ++i) {
            if (OP.exec(this.stack[i])) {
              if ('+' == this.stack[i]) {
                this.value = this.stack[i+1] + this.stack[i+2];
              } else if ('-' == this.stack[i]) {
                this.value = this.stack[i+1] - this.stack[i+2];
              } else if ('×' == this.stack[i]) {
                this.value = this.stack[i+1] * this.stack[i+2];
              } else if ('/' == this.stack[i]) {
                this.value = this.stack[i+1] / this.stack[i+2];
              }

              i += 2;
            }
          }

          this.stack = [];
          break;
        case '+-':
          this.value = -1 * this.value;
          this.restart = true;
          break;

        case '×':
        case '/':
        case '+':
          this.stack.push(command);

          if (!this.restart) {
            this.stack.push(this.value);
          }

          this.restart = true;
          break;
      }
    }
  };

  this.$get = function () {
    return CalculatorTool;
  };
});

app.controller('CalculatorCtrl', function ($scope, CalculatorTool) {
  var DIGIT = /^[0-9]$/
    , OP = /^[×\/+-]$/;

  this.calculator = $scope.calculator = new CalculatorTool();
});

app.directive('calculator', function () {
  return {
    restrict: 'C',
    templateUrl: '/templates/calc.html',
    scope: {},
    controller: 'CalculatorCtrl'
  };
});



