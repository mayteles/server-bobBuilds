const httpStatus = require("http-status");
const CartModel = require("../model/cart.model");
const { createNewOrder } = require("../controller/order.controller");

const addProductInCart = async (req, res) => {
  const { user } = req;
  try {
    await CartModel({ ...req.body, user: user._id }).save();
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
    let cartProducts = await CartModel.find({ user: user._id }).populate(
      "product"
    );
    return res
      .status(httpStatus.OK)
      .json({ data: cartProducts, message: "Cart Fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const cartCheckout = async (req, res) => {
  const { cart } = req.body;
  try {
    await createNewOrder(req, res);
    let cartArrays = cart.map((el) => el._id);
    await CartModel.deleteMany({ _id: { $in: cartArrays } });

    return res
      .status(httpStatus.OK)
      .json({ data: cartProducts, message: "Checkout Success" });
  } catch (error) {}
};
module.exports = {
  updateProductFromCart,
  deleteProductFromCart,
  addProductInCart,
  getUserCart,
  cartCheckout,
};
