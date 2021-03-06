/* jshint laxcomma:true */
angular.module('Calculator')
.provider('Calculator', function () {
  var IS_DIGIT = /^\d$/i
    , IS_OPERATOR = /^[\+\-\*\/]$/i;

  function Calculator(opts) {
    this.stack = [];
    this.value = '';
  }

  function evaluate(stack) {
    var op, left, right;
    var result = 0;

    while (stack.length) {
      op = stack.shift();

      if (IS_OPERATOR.exec(op)) {
        left = +stack.shift();
        right = +stack.shift();

        if (op == '+') {
          result = left + right;
        } else if (op == '-') {
          result = left - right;
        } else if (op == '*') {
          result = left * right;
        } else if (op == '/') {
          result = left / right;
        }
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

      if (IS_OPERATOR.exec(button)) {
        this.stack.push(button);
        this.stack.push(+this.value);
        this.reset = true;
        return;
      }

      if ('=' == button) {
        this.stack.push(+this.value);
        this.value = evaluate(this.stack);
      }
    }
  });

  this.$get = function () {
    return Calculator;
  };
});

