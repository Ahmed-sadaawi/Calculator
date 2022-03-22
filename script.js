const output = document.querySelector('[data-output]');
const numberElement = document.querySelectorAll('[data-number]');
const operatorElement = document.querySelectorAll('[data-operator]');
const clearAll = document.querySelector('[data-clear-all]')
const DEL = document.querySelector('[data-delete]');
const aquel = document.querySelector('[data-aquel]');

// loop on each numbers;
numberElement.forEach(numberTarget => {
    numberTarget.onclick = function () {
        output.innerHTML += this.innerHTML;
    }
});
// loop on each operators;
operatorElement.forEach(operator => {
    operator.onclick = function () {
        output.innerHTML += this.innerHTML;
    }
})
// aquels ;
aquel.onclick = function () {
    output.innerHTML = eval(output.innerHTML);
}


// clear all the output;
clearAll.onclick = function () {
    output.innerHTML = "";
}
// delete one of the output;
DEL.onclick = function () {
    output.innerHTML = output.innerHTML.toString().slice(0, -1);
}