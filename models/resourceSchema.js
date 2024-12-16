const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  images: [String], // Array of image URLs
  topic: { type: String, required: true },
  list: {
    type: [String],
    validate: {
      validator: (arr) => arr.length === 4, // Ensure list has exactly 4 items
      message: "List must contain exactly 4 items.",
    },
    required: true,
  },
  price: { type: Number, required: true },
  numberOfPersons: { type: Number, required: true },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
