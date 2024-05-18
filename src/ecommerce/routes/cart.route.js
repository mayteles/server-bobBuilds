const express = require("express");
const cartController = require("../controller/cart.controller.js");

const cartRouter = express.Router();

cartRouter.get("/", cartController.queryUserCart);

cartRouter.post("/", cartController.addCartProduct);

cartRouter.patch("/:id", cartController.updateCart);

cartRouter.delete("/:id", cartController.deleteCartProduct);
cartRouter.post("/checkout", cartController.handleCheckout);
module.exports = cartRouter;
