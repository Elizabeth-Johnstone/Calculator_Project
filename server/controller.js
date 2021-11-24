



module.exports = {
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

    generateTheme: (req, res) => {
        const themes = ['theme-pink', 'theme-blue', 'theme-green', 'theme-orange']
        let themeIndex = Math.floor(Math.random() * themes.length)
        randomTheme = themes[themeIndex]
        res.status(200).send(randomTheme);
      }
}