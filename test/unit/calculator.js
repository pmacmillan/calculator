

describe('Calculator', function () {
  beforeEach(module('Calculator'));

  describe('#pressButton', function () {
    it('should add two numbers', inject(function C(Calculator) {
      var calc = new Calculator();

      calc.push('5');
      calc.push('+');
      calc.push('2');
      calc.push('=');

      expect(calc.value).toEqual(7);

      calc.push('C');
      calc.push('8');
      calc.push('+');
      calc.push('5');
      calc.push('=');

      expect(calc.value).toEqual(13);

      calc.push('C');
      calc.push('+');
      calc.push('5');
      calc.push('=');

      expect(calc.value).toEqual(5);
    }));
  });
});


