module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBrackets = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  };

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if ((stack.includes(currentSymbol)) && (bracketsPair[currentSymbol] === currentSymbol)) {
      stack.pop()
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol)
    } else {
      if (stack.length === 0) {
        return false;
      };

      let topElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop()
      } else {
        return false;
      };
    };
  };

  return stack.length === 0;
};


















