/*let number1 = document.getElementById('number1').value || 0;
let number2 = document.getElementById('number2').value || 0;
let result = document.getElementById('calculation-result').textContent;

document.getElementById('add').addEventListener('click', function(){
    result = add(number1, number2);
})*/

let number1 = document.getElementById('number1'); //it is naming id 'number1' in the HTMl code as number1 in JS
let number2 = document.getElementById('number2'); // same here, calling and naming id 'number2' to number2
let resultElement = document.getElementById('calculation-result'); // this is making 'calculation-result' in the html to be resultElement where it will show the results of the input

function add(num1, num2) { // this is the funtion that, we are adding 'num1 and num2' where num1 and num2 are the funtion name
  return parseFloat(num1) + parseFloat(num2);
}

document.getElementById('add').addEventListener('click', function(){
    let num1 = number1.value || 0;   //we are now saying that num1 should be the value inputed for number1
    let num2 = number2.value || 0;
    resultElement.textContent = add(num1, num2); // the result should be the num1 and num2 added together.
})

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2)
}

document.getElementById('subtract').addEventListener('click', function(){
    let num1 = number1.value || 0;
    let num2 = number2.value || 0;
    resultElement.textContent = subtract(num1, num2);
})

function multiply(num1, num2){
    return parseFloat(num1) * parseFloat(num2)
}

document.getElementById('multiply').addEventListener('click', function(){
    let num1 = number1.value || 0;
    let num2 = number2.value || 0;
    resultElement.textContent = multiply(num1, num2);
})

function divide(num1, num2){
    return parseFloat(num1) / parseFloat(num2)
}

document.getElementById('divide').addEventListener('click', function(){
    let num1 = number1.value || 0;
    let num2 = number2.value || 0;
    resultElement.textContent = divide(num1, num2);
})