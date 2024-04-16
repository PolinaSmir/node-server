const express = require("express");
const { validateUser } = require("./middlewares");
const UserController = require("./controllers");
const app = express();

const bodyParcer = express.json(); // request.body

const PORT = 5000;

app.post("/user", bodyParcer, validateUser, UserController.registerUser);

app.get("/users", UserController.getAllUsers);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
