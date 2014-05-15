describe('calculator', function () {
  var $compile;
  var $rootScope;

  beforeEach(module('templates'));
  beforeEach(module('Calculator'));
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('renders into an element or attribute', function () {
    var e1 = $compile('<calculator></calculator>')($rootScope);
    var e2 = $compile('<div calculator></div>')($rootScope);

    $rootScope.$digest();

    // don't care about exact contents, that's what e2e is for.
    expect(e1.html().length).toBeGreaterThan(0);
    expect(e2.html().length).toBeGreaterThan(0);
  });
});

describe('CalculatorCtrl', function () {
  beforeEach(module('Calculator'));

  //
  // not really useful, this is where e2e tests
  // are much better in the overall scope of things
  //
  it('defines a calculator', inject(function ($controller) {
    var ctrl = $controller('CalculatorCtrl', { $scope: {} });
    expect(ctrl.calculator).toBeDefined();
  }));
});

describe('Calculator', function () {
  beforeEach(module('Calculator'));

  function buttonMasher(Calculator, tests) {
    tests.forEach(function (test) {
      var calc = new Calculator();

      test[0].forEach(function (key) {
        calc.push(key);
      });

      expect(calc.value).toEqual(test[1]);
    });
  }

  describe('#pressButton', function () {
    it('should add two numbers', inject(function (Calculator) {
      var tests = [
        [['5','+','2','='], 7],
        [['8','+','5','='], 13],
        [['1','0','+','1','='], 11],
        [['+','5','='], 5],
        [['2','3','+','9','9','='], 122]
      ];

      buttonMasher(Calculator, tests);
    }));

    it('should subtract two numbers', inject(function (Calculator) {
      var tests = [
        [['5','-','2','='], 5-2],
        [['8','-','5','='], 8-5],
        [['1','0','-','1','='], 10-1],
        [['-','5','='], 0-5],
        [['2','3','-','9','9','='], 23-99]
      ];

      buttonMasher(Calculator, tests);
    }));

    it('should multiply two numbers', inject(function (Calculator) {
      var tests = [
        [['5','*','2','='], 5*2],
        [['8','*','5','='], 8*5],
        [['1','0','*','1','='], 10*1],
        [['*','5','='], 0*5],
        [['2','3','*','9','9','='], 23*99]
      ];

      buttonMasher(Calculator, tests);
    }));

    it('should divide two numbers', inject(function (Calculator) {
      var tests = [
        [['5','/','2','='], 5/2],
        [['8','/','5','='], 8/5],
        [['1','0','/','1','='], 10/1],
        [['/','5','='], 0/5],
        [['2','3','/','9','9','='], 23/99]
      ];

      buttonMasher(Calculator, tests);
    }));
  });
});


