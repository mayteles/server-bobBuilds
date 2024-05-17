const express = require("express");
const orderController = require("../controller/order.controller.js");

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllUserOrders);

orderRouter.post("/", orderController.createNewOrder);

module.exports = orderRouter;
