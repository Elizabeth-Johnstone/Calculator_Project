module.exports = {
    
/*
calculateNums expects a string of two numbers separated by '/', 'x', '-', or '+'. It uses RegEx to split the string on the mathematical operator. Then, it assigns the two numbers to variables and converts them from strings to numbers. Finally, it performs the necessary calculation and sends the answer to the front-end.
*/
  
    calculateNums: (req, res) => {
        toCalculate = req.body.inputVals
        numsToCalculate = toCalculate.split(/[-+/x]/)
      
        firstNum = parseFloat(numsToCalculate[0])
        secondNum = parseFloat(numsToCalculate[1])
      
        if (toCalculate.includes("/")) {
          answer = firstNum / secondNum
        } else if (toCalculate.includes("x")) {
          answer = firstNum * secondNum
        } else if (toCalculate.includes("-")) {
          answer = firstNum - secondNum
        } else if (toCalculate.includes("+")) {
          answer =  firstNum + secondNum
        } else {answer = firstNum}
        res.status(200).send(`${answer}`)
      },
   
/*
generateTheme selects a random theme and sends it to the front-end.
*/

    generateTheme: (req, res) => {
        const themes = ['theme-pink', 'theme-blue', 'theme-green', 'theme-orange']
        let themeIndex = Math.floor(Math.random() * themes.length)
        randomTheme = themes[themeIndex]
        res.status(200).send(randomTheme);
      }
}