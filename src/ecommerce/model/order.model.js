const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
      },
    ],
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
