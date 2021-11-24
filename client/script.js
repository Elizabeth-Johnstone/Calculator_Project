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

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'theme-pink') {
        setTheme('theme-blue');
    } else {
        setTheme('theme-pink');
    }
}