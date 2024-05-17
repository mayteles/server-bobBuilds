const userService = require("../service/user.service.js");

const getUserById = async (req, res) => {
  return userService.getUser(req, res);
};

module.exports = { getUserById };
