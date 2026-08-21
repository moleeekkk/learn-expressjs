require("dotenv").config();

const express = require("express");
const app = express();

const con = require("./db.js");
const PORT = process.env.PORT;
con();

app.get("/", (req, res) => {
  res.send("Welcome");
});

// app.get("/", (req, res) => {
//   res.send("User Page");
// });

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});
