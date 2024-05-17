const express = require("express");
const productContoller = require("../controller/product.controller.js");

const productRouter = express.Router();

productRouter.get("/", productContoller.queryProducts);

productRouter.get("/:id", productContoller.fetchProduct);

module.exports = productRouter;
