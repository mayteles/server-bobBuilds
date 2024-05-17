const httpStatus = require("http-status");
const OrderModel = require("../model/order.model");

const createOrder = async (req, res) => {
  try {
    await OrderModel(req.body).save();
    return res
      .status(httpStatus.CREATED)
      .json({ message: "Order Created Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const getUserOrders = async (req, res) => {
  const { user } = req.body;
  try {
    let orders = await OrderModel.find({ user: user._id });
    return res
      .status(httpStatus.CREATED)
      .json({ data: orders, message: "Order Fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = { getUserOrders, createOrder };
