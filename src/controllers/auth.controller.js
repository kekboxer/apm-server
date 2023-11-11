const UserService = require("../services.js/user.service");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = UserService.findOne({ email });

    if (candidate) {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.login = async (req, res) => {};
