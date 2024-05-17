const express = require("express");
const authController = require("../controller/auth.controller.js");

const authRouter = express.Router();

authRouter.post("/register", authController.authRegister);

authRouter.post("/login", authController.authLogin);

module.exports = authRouter;
