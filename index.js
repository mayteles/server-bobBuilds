const express = require("express");
const httpStatus = require("http-status");
const dataBaseConnection = require("./src/ecommerce/config/database.config");
const cors = require("cors");
const authRouter = require("./src/ecommerce/routes/auth.route.js");
const ProductModel = require("./src/ecommerce/model/product.model.js");
const cartRouter = require("./src/ecommerce/routes/cart.route.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/cart", cartRouter);

app.get("/", (req, res) => {
  res
    .status(httpStatus.OK)
    .json({ message: "Welcome to Backend Server of Maylon-Ecommerce" });
});

app.listen(8080, async () => {
  try {
    console.log("Server Started ");
    await dataBaseConnection;
    console.log("DataBase Connected ");
  } catch (error) {
    console.log(error.message);
  }
});
