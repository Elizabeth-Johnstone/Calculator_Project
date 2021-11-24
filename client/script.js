// const divideButton = document.getElementById("divide")
// const multiplyButton = document.getElementById("multiply")
// const subtractButton = document.getElementById("subtract")
// const addButton = document.getElementById("add")
const displayScreen = document.getElementById("display")
const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")

clearButton.addEventListener("click", clearScreen)
equalsButton.addEventListener("click", calculate)

function display(value) {
    displayScreen.value += value
}

function clearScreen() {
    displayScreen.value = ""
}

function calculate() {
    let body = { inputVals: displayScreen.value }
    axios.post("http://localhost:5858/api/display", body).then((res) => displayScreen.value = res.data)
    
    .catch((error) => console.log(error))
}