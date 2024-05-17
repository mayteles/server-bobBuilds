const authService = require("../service/auth.service.js");

const authRegister = async (req, res) => {
  return authService.registerUser(req, res);
};

const authLogin = async (req, res) => {
  return authService.loginUser(req, res);
};

module.exports = { authLogin, authRegister };
