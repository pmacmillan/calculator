
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


