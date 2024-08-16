let operation = '';

function addOperand(operand) {
    operation += operand;

    let calculationElement = document.querySelector('.calculation');
    calculationElement.innerHTML = `${operation}`;
    console.log(operation);
}

function addOperator(operator) {
    operation += operator;

    let calculationElement = document.querySelector('.calculation');
    calculationElement.innerHTML = `${operation}`;
}

function calculate() {
    let result = '';
    let calculationElement = document.querySelector('.calculation');

    result = eval(operation);
    console.log(result);
    calculationElement.innerHTML = `${result}`;
    operation = result;
}

function deleteCalculation() {
    let calculationElement = document.querySelector('.calculation');
    calculationElement.innerHTML = '0';
}

function deleteOperation() {
    deleteCalculation();
    operation = '';
}
