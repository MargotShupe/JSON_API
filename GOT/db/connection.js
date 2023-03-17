const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gameofthrones", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
