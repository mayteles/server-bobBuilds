const express = require("express");
const httpStatus = require("http-status");
const dataBaseConnection = require("./src/ecommerce/config/database.config");
const cors = require("cors");
const authRouter = require("./src/ecommerce/model/auth.route.js");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);

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
