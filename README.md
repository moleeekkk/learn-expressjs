# 📘 Express Notes

# 📅 17/08/2026 --- Starting Express.js

## 🚀 Starting Express.js

**Express.js** is a lightweight and flexible web application framework for Node.js. It is mainly used to build web servers, REST APIs, and backend applications.

### Installation

```bash
npm install express
```

### Basic Express Server

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

# 📅 18/08/2026 --- Express Modules & APIs

## 📦 Express Module

The **Express module** provides the features required to create web servers and REST APIs easily in Node.js.

```javascript
const express = require("express");

const app = express();
```

---

## 🛣️ Router Module

The **Router** module is used to create modular and manageable routes in an Express.js application.

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Route");
});

module.exports = router;
```

---

## 📥 Creating GET API

The **GET** method is used to retrieve data from the server.

```javascript
app.get("/users", (req, res) => {
  res.json({
    message: "Users fetched successfully",
  });
});
```

---

## 📤 Creating POST API

The **POST** method is used to send data to the server and create new resources.

```javascript
app.use(express.json());

app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body,
  });
});
```

---

## 🧪 Testing APIs

APIs can be tested using tools such as **Postman**.

### GET Request

```text
Method: GET
URL: http://localhost:3000/users
```

### POST Request

```text
Method: POST
URL: http://localhost:3000/users
```

### POST Request Body

```json
{
  "name": "Maulik",
  "email": "maulik@example.com"
}
```

API testing helps verify whether the routes are working correctly and whether the server returns the expected response.

---

# 📅 19/08/2026 --- Routing, Middleware, Route Chaining & Error Handling

## 🛣️ Routing Method — `app.all()`

The **`app.all()`** method is used to handle requests for all HTTP methods on a specific route.

It is useful when the same logic needs to be executed regardless of whether the request is `GET`, `POST`, `PUT`, `DELETE`, or another HTTP method.

### Example

```javascript
app.all("/profile", (req, res) => {
  res.send("Profile Route");
});
```

---

## 🔄 Middleware

**Middleware functions** are functions that have access to the **request object (`req`)**, **response object (`res`)**, and the **next function** in the application's request-response cycle.

### Middleware Syntax

```javascript
function(req, res, next) {
    // Middleware logic
    next();
}
```

Middleware can:

- Execute code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function using `next()`.

### Example

```javascript
const middleware = (req, res, next) => {
  console.log("Middleware executed");
  next();
};

app.use(middleware);
```

The `next()` function passes control to the next middleware or route handler.

---

## 🔗 Route Chaining

**Route chaining** is used to define multiple HTTP methods for the same route or path.

The `router.route()` method allows us to chain multiple route handlers together.

### Example

```javascript
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
```

Here, the same `/profile` path handles different operations using different HTTP methods.

---

## ❌ Error Handling Using `use()`

Express.js can use **`app.use()`** to define middleware for handling errors.

An Express error-handling middleware has **four parameters**:

```javascript
(err, req, res, next);
```

### Example

```javascript
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).send("Something went wrong");
});
```

The error-handling middleware should generally be placed **after the other routes and middleware** so that errors can be passed to it.

---

# 📅 20/08/2026 --- Middleware & Template Engines

## 🔄 Middleware

Middleware functions in Express.js have access to the **request (`req`)**, **response (`res`)**, and **next (`next`)** function.

Middleware can be divided into different types.

### 1. Custom Middleware

**Custom middleware** is middleware created by the developer to perform specific tasks during the request-response cycle.

### Example

```javascript
const customMiddleware = (req, res, next) => {
    console.log("Custom middleware executed");
    next();
};

app.use(customMiddleware);
```

---

### 2. Inbuilt Middleware

**Inbuilt middleware** is middleware provided by Express.js for common application requirements.

### Example

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

* `express.json()` parses incoming JSON request data.
* `express.urlencoded()` parses URL-encoded form data.

---

## 🖼️ Template Engines in Express

**Template engines** allow us to create dynamic HTML pages by combining HTML with data from the server.

Common template engines used with Express.js are:

1. **EJS** — Embedded JavaScript
2. **Pug** — Formerly known as Jade
3. **Handlebars** — HBS

---

## 1. EJS — Embedded JavaScript

**EJS (Embedded JavaScript)** is a simple template engine that allows JavaScript code to be embedded inside HTML.

### Installation

```bash
npm install ejs
```

### Create `views` Folder

Create a folder named **`views`** in the project directory.

```text
project/
│
├── node_modules/
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── package-lock.json
```

The `views` folder is used to store EJS template files.

---
