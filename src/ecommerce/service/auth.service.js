const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model.js");
const httpStatus = require("http-status");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(httpStatus.OK).json({
        message: "User already exists",
      });
    } else {
      return bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          return res.status(httpStatus.BAD_REQUEST).json({
            message: err.message,
          });
        } else {
          await UserModel({ name, email, password: hash }).save();
          return res.status(httpStatus.CREATED).json({
            message: "User registerd success",
          });
        }
      });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      res.status(httpStatus.OK).json({
        message: "User not exists",
      });
    } else {
      return bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          return res.status(httpStatus.BAD_REQUEST).json({
            message: err.message,
          });
        }
        if (result) {
          return jwt.sign(
           { user},
            "hanumat",

            async (err, token) => {
              if (err) {
                return res.status(httpStatus.BAD_REQUEST).json({
                  message: err.message,
                });
              } else {
                return res.status(httpStatus.OK).json({
                  message: "User logged in success",
                  token,
                });
              }
            }
          );
        } else {
          return res.status(httpStatus.UNAUTHORIZED).json({
            message: "Password is wrong",
          });
        }
      });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
