const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { required: true, type: String },
    description: { required: true, type: String },
    image: { required: true, type: String },
    price: { required: true, type: Number },
    category: { required: true, type: String },
  },
  { timeStamps: true }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
