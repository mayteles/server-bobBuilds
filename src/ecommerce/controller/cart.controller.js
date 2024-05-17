const cartService = require("../service/cart.service.js");

const addCartProduct = async (req, res) => {
  return cartService.addProductInCart(req, res);
};

const updateCart = async (req, res) => {
  return cartService.updateProductFromCart(req, res);
};

const deleteCartProduct = async (req, res) => {
  return cartService.deleteProductFromCart(req, res);
};

const queryUserCart = async (req, res) => {
  return cartService.getUserCart(req, res);
};

module.exports = {
  addCartProduct,
  updateCart,
  deleteCartProduct,
  queryUserCart,
};
