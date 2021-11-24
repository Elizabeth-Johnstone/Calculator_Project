require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/display", (req, res) => {
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
})

app.listen(SERVER_PORT, () =>
  console.log(`Server running on ${SERVER_PORT}`)
)