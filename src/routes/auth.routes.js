const { Router } = require("express");
const router = Router();
const authController = require("../controllers/auth.controller");
const { authValidator } = require("../middlewares/validators/auth.validator");

router.post("/register", authValidator, authController.register);

router.post("/login", authController.login);

module.exports = router;
