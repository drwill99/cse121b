/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {

    return number1 + number2;

}

function addNumbers() {

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (divideNumber1, divideNumber2) {
    
        return divideNumber1 / divideNumber2;
    
    }
    
function divideNumbers() {
    
        let divideNumber1 = Number(document.querySelector('#dividend').value);
        let divideNumber2 = Number(document.querySelector('#divisor').value);
    
        document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    }

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */

let oddsArray = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').textContent = oddsArray;

/* Output Evens Only Array */

let evensArray = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evensArray;

/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */

numbersArray.forEach((number, index) => numbersArray[index] = number * 2);
document.querySelector('#multiplied').textContent = numbersArray;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultipliedArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultipliedArray;

/* Get Total Due Button Click Event */

document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#member').checked;
    let total;

    if (membershipCheckbox) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }

    document.querySelector('#total').textContent = `Total Due: $${total.toFixed(2)}`;
});
