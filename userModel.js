var mongoose = require("mongoose");

//schema
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

// Export Bio Model
var User = (module.exports = mongoose.model("user", userSchema));
