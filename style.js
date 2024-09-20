const displaylabel = document.getElementById('display');
let oldNumber
let operator 

// add/subtract/multiply/divide
function operate(input) {
    
    if (!!oldNumber) {
        const newNumber = displaylabel.value
        oldNumber = calculate(oldNumber, newNumber, operator)
    } else {
        oldNumber = displaylabel.value
    }
    operator = input
    displaylabel.value=""
}

function equal() {
    const newNumber = displaylabel.value
    const result = calculate(oldNumber, newNumber, operator)
    displaylabel.value = result
    oldNumber = undefined
}

function calculate(a,b,opt) {
    const firstNumber = parseInt(a)
    const secondNumber = parseInt(b)
    if (opt === "+") {
        return firstNumber + secondNumber;     
    }
    if (opt === "-") {
        return firstNumber - secondNumber;
    }
    if (opt === "*") {
        return firstNumber * secondNumber;
    }
    if (opt === "/") {
        return firstNumber / secondNumber;
    }
}

function clearDisplay() {
    displaylabel.value = '0'
    oldNumber = undefined
}

function showNumber(input) {
    let oldValue = displaylabel.value
    if (oldValue === "0")
    { oldValue = "" }

    
    displaylabel.value = oldValue + input
  
}
