var mongoose = require("mongoose");

//schema
var bioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  rarity: {
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
});

// Export Bio Model
var Bio = (module.exports = mongoose.model("bio", bioSchema));
