const httpStatus = require("http-status");
const CartModel = require("../model/cart.model");

const addProductInCart = async (req, res) => {
  try {
    await CartModel(req.body).save();
    return res
      .status(httpStatus.CREATED)
      .json({ message: "Product added in cart success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await CartModel.findByIdAndDelete(id);
    return res
      .status(httpStatus.OK)
      .json({ message: "Product deleted from cart" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const updateProductFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await CartModel.findByIdAndUpdate(id, req.body);
    return res
      .status(httpStatus.OK)
      .json({ message: "Product updated from cart" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const getUserCart = async (req, res) => {
  const { user } = req;
  try {
    let cartProducts = await CartModel.find({ user: user._id });
    return res
      .status(httpStatus.OK)
      .json({ data: cartProducts, message: "Cart Fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = {
  updateProductFromCart,
  deleteProductFromCart,
  addProductInCart,
  getUserCart,
};
