require("dotenv").config();
const express = require("express");
const app = express();
const { DBConnect, GetData } = require("./db.js");

// const con = require("./db.js");
const PORT = process.env.PORT;
// con();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/faculty", async (req, res) => {
  try {
    const data = await GetData();
    res.json(data);
  } catch (err) {
    res.json({ message: "Error Occured While Fatching Data From Database!!" });
  }
});

DBConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
  });
});
