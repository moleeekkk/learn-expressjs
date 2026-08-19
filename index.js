const express = require("express");

const app = express();
const userRouter = require("./users");

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Routing
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("User Page");
});

//Middleware
//function(req, res, next)
const myLogger = (req, res, next) => {
  console.log("Logged");
  next();
};

app.use(myLogger);

app.listen(9999, () => {
  console.log("Server running on port 9999");
});
