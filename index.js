const express = require("express");
const yup = require("yup");
const app = express();

const bodyParcer = express.json(); //request.body

const validation = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isSubscribed: yup.boolean().required(),
});

const PORT = 5000;

app.post("/user", bodyParcer, async (req, res, next) => {
  try {
    const value = await validation.validate(req.body);
    console.log(value);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
