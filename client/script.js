
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")
const subtractButton = document.getElementById("subtract")
const addButton = document.getElementById("add")
const equalsButton = document.getElementById("equals")




function clearScreen() {
    document.getElementById("display").value = ""
}

function display(value) {
    document.getElementById("display").value += value
}

// function divide() {
//     let firstNumber = document.getElementById("display").value
//     result = firstNumber / 
// }

// function calculation() {
//     let firstNumber = document.getElementById("display").value

//     let answer = eval(firstNumber)
//     document.getElementById("display").value = answer;
//     console.log(answer)
// }


