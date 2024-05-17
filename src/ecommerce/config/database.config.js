const mongoose = require("mongoose");

const dataBaseConnection = mongoose.connect(
  `mongodb+srv://hanumat:hanumat@cluster0.aqmtmxk.mongodb.net/maylonecommerce`
);

module.exports = dataBaseConnection;
