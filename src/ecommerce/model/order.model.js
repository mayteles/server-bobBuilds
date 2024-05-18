const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    cart: [],
    totalValue: { required: true, type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timeStamps: true }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
