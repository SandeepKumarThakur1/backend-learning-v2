const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/userListdb`);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
  para: String,
});

module.exports = mongoose.model("user", userSchema);