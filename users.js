const express = require("express");
const router = express.Router();

// router.get("/about", (req, res) => {
//   res.send("<div><h1>Maulik</h1><p>Dabhi</p></div>");
// });

router.post("/login", (req, res) => {
  res.send("Login Page");
});

const data = {
  name: "Maulik",
  sem: 3,
  age: 21,
  department: "MCA",
};

router.post("/registration", (req, res) => {
  res.send(data);
});

router.post("/login/:id/:name", (req, res) => {
  res.send(`User Login in : ${req.params.id},
    User Name : ${req.params.name}`);
});

router.all("/about", (req, res) => {
  res.send("About page");
});

//Route - chaining of routes/path
router
  .route("/profile")
  .get((req, res) => {
    res.send("Get Profile");
  })
  .post((req, res) => {
    res.send("Add Profile");
  })
  .put((req, res) => {
    res.send("Edit Profile");
  })
  .delete((req, res) => {
    res.send("Delete Profile");
  });

router.get("/error", (req, res, next) => {
  return next(new Error("Some error has occured!"));
});
//Error handling - default error handler function
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
});

module.exports = router;
