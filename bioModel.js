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
});

// Export Bio Model
var Bio = (module.exports = mongoose.model("bio", bioSchema));

module.exports.get = function (callback, limit) {
  Bio.find(callback).limit(limit);
};
