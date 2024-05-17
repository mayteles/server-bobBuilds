const orderService = require("../service/order.service.js");

const getAllUserOrders = async (req, res) => {
  return orderService.getUserOrders(req, res);
};

const createNewOrder = async (req, res) => {
  return orderService.createOrder(req, res);
};

module.exports = { getAllUserOrders, createNewOrder };
