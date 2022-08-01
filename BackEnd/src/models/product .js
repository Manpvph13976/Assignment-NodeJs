import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "category",
  },
  feture: {
    type: String,
  },
  description: {
    type: String,
  },
  saleOffPrice: {
    type: Number,
  },
  shortDescription: {
    type: String,
  },
});

export default mongoose.model("Product", productSchema);
