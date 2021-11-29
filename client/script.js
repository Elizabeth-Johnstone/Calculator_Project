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

// const baseURL = window.location.origin
const baseURL = `http://localhost:5858`

function calculate() {
    let body = { inputVals: displayScreen.value }
    axios.post(`${baseURL}/api/display`, body).then((res) => displayScreen.value = res.data)
    .catch((error) => console.log(error))
}

function changeTheme() {
    axios.get(`${baseURL}/api/theme`)
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