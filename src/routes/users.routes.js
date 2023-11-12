const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/users.controller");

// api/users/
router.get("/", usersController.getAll);

module.exports = router;
