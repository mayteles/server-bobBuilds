const httpStatus = require("http-status");
const UserModel = require("../model/user.model");

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await UserModel.findById(id);
    return res
      .status(httpStatus.OK)
      .json({ data: user, message: "User fetched Success" });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = { getUser };
