const express = require("express");

const app = express();
const path = require("path");
// const userRouter = require("./users");

/*
app.get("/", (req, res) => {
  res.send("Welcome");
});

// Routing
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("User Page");
});

//Inbuilt middleware
//Converts the raw data stream into JS object.
app.use(express.json());

//forms data send as plain text/string
app.use(express.urlencoded({ extended: true }));

//Custom Middleware
//function(req, res, next)
const myLogger = (req, res, next) => {
  console.log("Logged in User");
  next();
};

//applied the middleware
//always executed, before any http methods.
app.use(myLogger);

app.use((req, res, next) => {
  res.send("second middleware executed");
  next();
});
*/

//Setting up template using ejs
app.set("views", path.join(__dirname, "views"));

//Set view engine
app.set("view engine", "ejs");

const users = { name: "Maulik", age: 21 };

app.get("/", (req, res) => {
  res.render("index", users);
});

app.get("/profile/:name/:age", (req, res) => {
  res.render("profile", users);
});

app.listen(9999, () => {
  console.log("Server running on port 9999");
});
