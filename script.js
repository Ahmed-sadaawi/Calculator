const previousOperandElement = document.querySelector('.previous-operand');
// const currentOperandElement = document.querySelector('.current-operand');
const numberElement = document.querySelectorAll('[data-number]');
const operatorElement = document.querySelectorAll('[data-operation]');
const deleteOne = document.querySelector('.calculator-grid .delete');
const clearAll = document.querySelector('[data-clear-all]');
const aquel = document.querySelector('[data-aquel]');

// loop on numbers;
for (i = 0; i < numberElement.length; i++) {
    numberElement[i].onclick = function () {
        previousOperandElement.innerHTML += this.innerHTML;
    };

}

// loop on operations;
for (i = 0; i < operatorElement.length; i++) {
    operatorElement[i].onclick = function () {
        previousOperandElement.innerHTML += this.innerHTML;
    }
}

// aquel ;
aquel.onclick = function () {
    previousOperandElement.innerHTML = eval(previousOperandElement.innerHTML)
}

// delete last character;
deleteOne.onclick = function () {
    previousOperandElement.innerHTML = previousOperandElement.innerHTML.toString().slice(0, -1);
}
// clear all ;
clearAll.onclick = function () {
    previousOperandElement.innerHTML = previousOperandElement.innerHTML = "";
}