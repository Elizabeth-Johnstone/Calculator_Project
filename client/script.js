const displayScreen = document.getElementById("display");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const themeButton = document.getElementById("theme-button");

clearButton.addEventListener("click", clearScreen);
equalsButton.addEventListener("click", calculate);
themeButton.addEventListener("click", changeTheme);

/*
display() is used in index.html. When a button with a number or mathematical operator is clicked, the corresponding character is shown on the display screen.
*/

function display(value) {
  displayScreen.value += value;
}

/*
clearScreen() makes the display screen value an empty string. It clears/restarts calculations.
*/

function clearScreen() {
  displayScreen.value = "";
}

/*
Assign baseURL to window.location.origin for Heroku deployment. Assign it to `http://localhost:5858` to run locally.
*/

// const baseURL = window.location.origin
const baseURL = `http://localhost:5858`;

/*
calculate() uses a POST request to send user inputted values to the back-end. When calculateNums sends back an answer to the inputted values, calculate() sets the value of displayScreen to that answer.
*/

function calculate() {
  let body = { inputVals: displayScreen.value };
  axios
    .post(`${baseURL}/api/display`, body)
    .then((res) => (displayScreen.value = res.data))
    .catch((error) => console.log(error));
}

/*
changeTheme() performs a GET request to the back-end. The back-end sends back a random theme with generateTheme. Then changeTheme() checks if the theme selected by generateTheme is the current displayed theme. If it is, it goes back and requests another random theme. Otherwise, it sets the new theme to the random theme.
*/

function changeTheme() {
  axios
    .get(`${baseURL}/api/theme`)
    .then(function (res) {
      let currentTheme = document.documentElement.className;
      if (res.data === currentTheme) {
        changeTheme();
      } else {
        localStorage.setItem("theme", res.data);
        document.documentElement.className = res.data;
      }
    })
    .catch((error) => console.log(error));
}
