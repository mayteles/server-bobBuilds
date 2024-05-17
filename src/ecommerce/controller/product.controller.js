const productService = require("../service/product.service.js");

const queryProducts = async (req, res) => {
  return productService.getAllProducts(req, res);
};

const fetchProduct = async (req, res) => {
  return productService.getProduct(req, res);
};

module.exports = { queryProducts, fetchProduct };
