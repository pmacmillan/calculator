

describe('Calculator', function () {
  beforeEach(module('Calculator'));

  describe('#pressButton', function () {
    it('should add two numbers', inject(function C(Calculator) {
      var tests = [
        [['5','+','2','='], 7],
        [['8','+','5','='], 13],
        [['1','0','+','1','='], 11],
        [['+','5','='], 5],
        [['2','3','+','9','9','='], 122]
      ];

      tests.forEach(function (test) {
        var calc = new Calculator();
        test[0].forEach(function (key) {
          calc.push(key);
        });

        expect(calc.value).toEqual(test[1]);
      });

    }));
  });
});


