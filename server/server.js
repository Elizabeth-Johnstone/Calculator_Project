require("dotenv").config();

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

app.listen(process.env.PORT || 5858, () =>
  console.log(`Server running on 5858`)
)