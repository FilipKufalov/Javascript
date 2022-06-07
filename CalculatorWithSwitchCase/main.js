let a;
let b;
let operator;

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
			break;
        case '-':
            return a - b;
			break;
        case '*':
            return a * b;
			break;
        case '/':
            return a / b;
			break;
        default:
            return 'Error';
			break;
    }
}

console.log(calculator(3, 3, "/"));