
var app = angular.module('Calculator');

app.directive('calculatorCommand', function () {
  return {
    restrict: 'A',
    require: '^calculator',
    link: link
  };

  function link(scope, el, attr, calculator) {
    el.attr('type', 'button');
    el.on('click', function () {
      scope.calculator.exec(el.text());
      scope.$digest();
    });
  }
});

