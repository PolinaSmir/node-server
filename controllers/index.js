const User = require("../models/User");

module.exports.registerUser = (req, res, next) => {
  const { body } = req;
  const user = new User(body);
  user.addUser();

  delete user.password;
  res.status(201).send(user);
};

module.exports.getAllUsers = (req, res, next) => {
  const usersArray = User.findAll();
  res.status(200).send(usersArray);
};
