const displayScreen = document.getElementById("display")
const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")
const themeButton = document.getElementById("theme-button")

clearButton.addEventListener("click", clearScreen)
equalsButton.addEventListener("click", calculate)
themeButton.addEventListener("click", changeTheme)

function display(value) {
    displayScreen.value += value
}

function clearScreen() {
    displayScreen.value = ""
}

const API = process.env.NODE_ENV === 'production' ? 'https://space-calculator-project.herokuapp.com/api' : 'http://localhost:5858/api'


function calculate() {
    let body = { inputVals: displayScreen.value }
    axios.post(`${API}/display`, body).then((res) => displayScreen.value = res.data)
    .catch((error) => console.log(error))
}

function changeTheme() {
    axios.get(`${API}/theme`)
    .then(function (res) {
        let currentTheme = document.documentElement.className
        if (res.data === currentTheme) {
            changeTheme()
        } else {
        localStorage.setItem('theme', res.data);
        document.documentElement.className = res.data
        }
    })
    .catch((error) => console.log(error))
}