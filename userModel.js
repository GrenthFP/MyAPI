var mongoose = require("mongoose");

//schema
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// Export Bio Model
var User = (module.exports = mongoose.model("user", userSchema));
