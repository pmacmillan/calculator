angular.module('Calculator')
.provider('Calculator', function () {
  var IS_DIGIT = /^\d$/i;

  function Calculator() {
    this.stack = [];
    this.value = '';
  }

  function evaluate(stack) {
    var op, left, right;
    var result = 0;

    while (stack.length) {
      op = stack.shift();

      if ('+' == op) {
        left = stack.shift()|0;
        right = stack.shift()|0;

        result = left + right;
      }
    }

    return result;
  }

  angular.extend(Calculator.prototype, {
    push: function (button) {
      if (IS_DIGIT.exec(button)) {
        if (this.reset) {
          this.value = button;
          this.reset = false;
        } else {
          this.value = this.value + button;
        }

        return;
      }

      if ('C' == button) {
        this.stack = [];
        this.value = '';
        return;
      }

      if ('+' == button) {
        this.stack.push('+');
        this.stack.push(this.value|0);
        this.reset = true;
        return;
      }

      if ('=' == button) {
        this.stack.push(this.value|0);
        this.value = evaluate(this.stack);
      }
    }
  });

  this.$get = function () {
    return Calculator;
  };
});

