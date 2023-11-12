const { check } = require("express-validator");

exports.authValidator = [
  check("login", "Login must contain at least 6 symbols").isLength({
    min: 6,
  }),
  check("password", "Password must contain at least 6 symbols").isLength({
    min: 6,
  }),
];
