const Product = require("../models/Product");

exports.createProduct = (req, res, next) => {
  delete req.body._id;
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then(() =>
      res.status(201).json({ message: "Le produit à été enregistré !" })
    )
    .catch((error) => res.status(400).json({ error: error }));
};
exports.getOneProduct = (req, res, next) => {
  Product.findOne(
    { _id: req.params.productId },
    { ...req.body, _id: req.params.id }
  )
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error: error }));
};
exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error: error }));
};
exports.modifyProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.productId })
    .then((products) => res.status(201).json(products))
    .catch((error) => res.status(404).json({ error: error }));
};
exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.productId })
    .then(() =>
      res.status(200).json({ message: "Le produit à été supprimé !" })
    )
    .catch((error) => res.status(404).json({ error: error }));
};
