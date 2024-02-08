const mongoose = require("mongoose");

const createDb = (uri) => {
  return mongoose.connect(uri);
};

module.exports = createDb;
