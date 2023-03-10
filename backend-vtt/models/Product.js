const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  averageRating: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
