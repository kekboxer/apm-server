const bcrypt = require("bcrypt");
const UserService = require("../services.js/users.service");
const { validationResult } = require("express-validator");

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { login, password } = req.body;
    const candidate = await UserService.findOne({ login });

    if (candidate) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserService.create({
      login,
      password: hashedPassword,
    });

    return res.status(201).json({ data: user, message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

exports.login = async (req, res) => {};
