import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: True,
  },
  desc: {
    type: String,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "category",
  },
});

export default mongoose.model("Product", productSchema);
