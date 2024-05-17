const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const authenticatorMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
     return jwt.verify(authorization, "hanumat", async (err, decoded) => {
        if (err) {
          return res
            .status(httpStatus.UNAUTHORIZED)
            .json({ message: err.message });
        }
        if (decoded) {
          req.user = decoded.user;
          next();
        }
      });
    } else {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Your are Unauthorized" });
    }
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
  }
};

module.exports = { authenticatorMiddleware };
