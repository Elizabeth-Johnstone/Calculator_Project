const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const app = express();
app.use(cors());
app.use(express.json());

const {
calculateNums,
generateTheme
} = require('./controller')

app.post("/api/display", calculateNums)
app.get("/api/theme", generateTheme)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on ${SERVER_PORT}`)
)