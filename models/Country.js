const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cardImage: { type: String, required: true },
  images: [String],
});

module.exports = mongoose.model("Country", CountrySchema);
