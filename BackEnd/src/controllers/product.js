import Product from "../models/product ";

export const list = async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error, can't find list product");
  }
};

export const read = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error, can't find product");
  }
};

export const create = async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error, can't create product");
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove({
      _id: req.params.id,
    }).exec();
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error, can't remove product");
  }
};

export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error, can't update product");
  }
};
