require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const authCtrl = require("./controllers/controller.js");

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/login", authCtrl.login);
// app.get("/login", authCtrl.getColors)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on ${SERVER_PORT}`)
)