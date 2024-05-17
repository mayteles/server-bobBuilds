const express = require("express");
const userController = require("../controller/user.controller.js");

const userRouter = express.Router();

userRouter.get("/:id", userController.getUserById);

module.exports = userRouter;
