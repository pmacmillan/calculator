

describe('calculator', function () {
  beforeEach(module('CalculatorApp'));

  it('should exist', inject(function ($controller) {
    var Ctrl = $controller('CalculatorCtrl', { $scope: {} });
    expect(Ctrl).toBeDefined();
  }));

  describe('exec', function () {
    it('should add numbers together', inject(function ($controller) {
      var $scope = {};
      var Ctrl = $controller('CalculatorCtrl', { $scope: $scope });
      var calc = Ctrl.calculator;

      calc.exec('6');
      calc.exec('+');
      calc.exec('9');
      calc.exec('=');

      expect($scope.calculator.value).toEqual(15);
    }));

    it('should remember values', inject(function ($controller) {
      var $scope = {};
      var Ctrl = $controller('CalculatorCtrl', { $scope: $scope });
      var calc = Ctrl.calculator;

      calc.exec('4');
      calc.exec('2');
      calc.exec('M+');
      calc.exec('C');

      expect(calc.value).toEqual(0);

      calc.exec('MR');

      expect(calc.value).toEqual(42);
    }));
  });
});
