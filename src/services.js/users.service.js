const db = require("../models");
const Model = db.User;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (user) => {
  // Save User in the database
  return Model.create(user);
};

// Retrieve all Users from the database.
exports.findAll = () => {
  return Model.findAll();
};

// Find a single User with an login
exports.findOne = ({ login }) => {
  return Model.findOne({
    where: {
      login,
    },
  });
};

// Find a single User with an id
exports.findByPk = ({ id }) => {
  return Model.findByPk(id);
};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};
