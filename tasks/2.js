class Calculator {
    static methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    };
  
    calculate(str) {
        const [a, op, b] = str.split(" ");
        return Calculator.methods[op](+a, +b);
    }
}