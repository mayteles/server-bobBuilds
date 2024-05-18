const httpStatus = require("http-status");
const ProductModel = require("../model/product.model");

const createProducts = async (req, res) => {
  try {
    await ProductModel.insertMany([
      {
        title: "Wireless Bluetooth Headphones",
        description:
          "High-quality wireless Bluetooth headphones with noise cancellation and long battery life.",
        image: "https://example.com/images/bluetooth-headphones.jpg",
        price: 89.99,
        category: "Electronics",
      },
      {
        title: "Smartphone Holder",
        description:
          "Adjustable and universal smartphone holder for cars, suitable for all phone sizes.",
        image: "https://example.com/images/smartphone-holder.jpg",
        price: 19.99,
        category: "Accessories",
      },
      {
        title: "Electric Kettle",
        description:
          "Fast boiling electric kettle with a 1.7-liter capacity and auto shut-off feature.",
        image: "https://example.com/images/electric-kettle.jpg",
        price: 29.99,
        category: "Home Appliances",
      },
      {
        title: "Yoga Mat",
        description:
          "Eco-friendly yoga mat with non-slip surface, perfect for all types of yoga practices.",
        image: "https://example.com/images/yoga-mat.jpg",
        price: 24.99,
        category: "Fitness",
      },
      {
        title: "LED Desk Lamp",
        description:
          "Energy-efficient LED desk lamp with adjustable brightness and flexible arm.",
        image: "https://example.com/images/led-desk-lamp.jpg",
        price: 34.99,
        category: "Office Supplies",
      },
      {
        title: "Stainless Steel Water Bottle",
        description:
          "Double-walled, vacuum-insulated stainless steel water bottle that keeps beverages cold for 24 hours or hot for 12 hours.",
        image: "https://example.com/images/stainless-steel-water-bottle.jpg",
        price: 15.99,
        category: "Outdoors",
      },
      {
        title: "Fitness Tracker",
        description:
          "Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking.",
        image: "https://example.com/images/fitness-tracker.jpg",
        price: 49.99,
        category: "Electronics",
      },
      {
        title: "Ceramic Coffee Mug",
        description:
          "Stylish ceramic coffee mug with a comfortable handle and 12 oz capacity.",
        image: "https://example.com/images/ceramic-coffee-mug.jpg",
        price: 9.99,
        category: "Kitchen",
      },
      {
        title: "Portable Charger",
        description:
          "Compact and high-capacity portable charger, perfect for charging devices on the go.",
        image: "https://example.com/images/portable-charger.jpg",
        price: 25.99,
        category: "Electronics",
      },
      {
        title: "Wireless Mouse",
        description:
          "Ergonomic wireless mouse with adjustable DPI and long battery life.",
        image: "https://example.com/images/wireless-mouse.jpg",
        price: 19.99,
        category: "Computers",
      },
    ]);
  } catch (error) {}
};

const getAllProducts = async (req, res) => {
  const { category, search } = req.query;
  let filter = {};
  if (category) filter.category = category;

  const regex = new RegExp(search, "i");

  const query = {
    ...filter,
    title: { $regex: regex },
  };
  try {
    let products = await ProductModel.find(query);
    return res
      .status(httpStatus.OK)
      .json({ data: products, message: "Product's Fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};
const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    let product = await ProductModel.findById(id);
    return res
      .status(httpStatus.OK)
      .json({ data: product, message: "Product Fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = { createProducts, getAllProducts, getProduct };
