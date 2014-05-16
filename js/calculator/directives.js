(function () {
  'use strict'


var module = angular.module('Calculator');

module.directive('calculator', function () {
  return {
    restrict: 'E',
    require: 'ngModel',
    templateUrl: 'templates/calculator.html',
    controller: 'CalculatorCtrl',
    scope: { value: '=ngModel' }
  };
});

module.directive('calculatorCommand', function () {
  return {
    restrict: 'EA',
    require: '^calculator',
    link: linkFn
  };

  function linkFn(scope, el, attr, ctrl) {
    el.on('click', function () {
      ctrl.calculator.push(el.text());
      el.blur();

      scope.$digest();
    });
  }
});

})();
