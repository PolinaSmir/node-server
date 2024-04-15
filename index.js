const express = require("express");
const { validateUser } = require("./middlewares");
const app = express();

const bodyParcer = express.json(); // request.body

const PORT = 5000;

app.post("/user", bodyParcer, validateUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
