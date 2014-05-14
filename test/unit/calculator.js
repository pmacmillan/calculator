

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

      Ctrl.exec('6');
      Ctrl.exec('+');
      Ctrl.exec('9');
      Ctrl.exec('=');

      expect($scope.value).toEqual(15);
    }));
  });
});
