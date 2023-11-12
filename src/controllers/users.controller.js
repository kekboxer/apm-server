const UserService = require("../services.js/users.service");

exports.getAll = async (req, res) => {
  try {
    const users = await UserService.findAll();

    return res.status(201).json({ data: users, message: "Users retrievied" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
