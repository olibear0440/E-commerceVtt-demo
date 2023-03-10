const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/product");

//creer un produit
router.post("/", productCtrl.createProduct);

//recuperer tous les produits
router.get("/", productCtrl.getAllProducts);

//récuperer un produit par son id
router.get("/:productId", productCtrl.getOneProduct);

//modifier un produit recuperer par son id
router.put("/:productId", productCtrl.modifyProduct);

//supprimer un produit par son id
router.delete("/:productId", productCtrl.deleteProduct);

module.exports = router;
