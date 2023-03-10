const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./dbMongoose");
const Product = require("./models/Product");
const User = require("../models/User")

const products = [
  {
    id: "1",
    name: " VTT Twostroke AL FIVE",
    price: "1399",
    description:
      "Transmission Shimano Deore 11 vitesses. Fourche SR SUNTOUR XCM 32. Roues XCD23. Champion de VTT, Julien Absalon, a emmené son team Absolute Absalon sur la plus haute marche du podium des championnats de monde 2020 grâce au VTT BMC Fourstroke.",
    imageUrl: "./assets/img/vttBmc.jpg",
    averageRating: "5.0",
  },
  {
    id: "2",
    name: "VTT CANNONDALE F-SI ",
    price: "2563",
    description:
      "VTT cross-country géométrie spécifique. Technologies Micro-suspension Save sur le F-si et Flex-pivot sur le Scalpel. Electronique connectée et embarquée.",
    imageUrl: "./assets/img/vttcannondale.jpg",
    averageRating: "5.0",
  },
  {
    id: "3",
    name: "VTT CUBE STEREO HYBRID ",
    price: "9102",
    description:
      "cadres système SizeSplit, batterie de 750W Bosch CX quatrième génération. Axe arrière Boost 148, ses larges roulements de pivots et son All Mountain Geometry offrent un pilotage précis. Patte de dérailleur Sram UDH pour une protection contre les chocs en cas d'accidents.",
    imageUrl: "./assets/img/vttcubestereo.jpg",
    averageRating: "5.0",
  },
  {
    id: "4",
    name: "VTT FOCUS RAVEN",
    price: "3199",
    description:
      "Cadre en carbone léger, axes traversants RAT et confort CIA. Fourche suspendu ROCKSHOX SID SELECT légère avec 100 mm de débattement. Groupe SRAM GX EAGLE 52, roues rapides DT SWISS X1900 et tige de selle en carbone.",
    imageUrl: "./assets/img/vttfocus.jpg",
    averageRating: "5.0",
  },
  {
    id: "5",
    name: "VTT GIANT TRANCE X ELEC",
    price: "6400",
    description:
      "Moteur SyncDrive Pro délivrant 85Nm de couple avec un ratio d'assistance personnalisable jusqu'à 400%. Suspension Giant Maestro optimisée pour une géométrie 29 pouces avec 140mm/150mm de débattement arrière/avant. Technologie Giant Flip-Chip directement compatible avec la batterie EnergyPak Smart 800.",
    imageUrl: "./assets/img/vttgiant.jpg",
    averageRating: "5.0",
  },
  {
    id: "6",
    name: "VTT GT GRAVITY",
    price: "3499",
    description:
      "VTTAe de 150 mm de débattement à l'avant comme à l'arrière. Le cadre est en alu et les roues en 29 pouces. C'est un bike destiné à un programme all-mountain, équipé d'une motorisation shimano. Transmission Sram Eagle SX 11/50 12v. Pneus Maxxis Minion DHF/DHRII 2.6 3C Exo+. Amortisseur Rockshox Deluxe Select R.",
    imageUrl: "./assets/img/vttgravity.jpg",
    averageRating: "5.0",
  },
  {
    id: "7",
    name: "VTT LAPIERRE ZESTY TR",
    price: "2099",
    description:
      "Amortisseur Lapierre AF2 Air Trunnion Metric Rebound & Lockout (165*45). Boîtier de pédalier Shimano BBMT800 Pressfit. Cadre Zesty TR Supreme 5 alloy 120mm Travel (29″) Pressfit Boost, Metric, Thru Axle. Cassette New Shimano Deore Cs- M5100-11 Spd 11-51T.",
    imageUrl: "./assets/img/vttlapierre.jpg",
    averageRating: "5.0",
  },
  {
    id: "8",
    name: "VTT MOUSTACHE SAMEDI 27",
    price: "4199",
    description:
      "deux versions de cadre, standard et Open. Moteur Active Plus de .Performance Line et ses 65Nm. 3 moteurs jantes spécifiques Moustache et pneus Maxxis.",
    imageUrl: "./assets/img/vttmoustache.jpg",
    averageRating: "5.0",
  },
  {
    id: "9",
    name: "VTT ORBEA RISE E-BIKE",
    price: "5299",
    description:
      "Partenariat avec Shimano, moteur EP8. Batterie modulaire qui combine une batterie principale très légère de 360Wh à une batterie optionnelle de 252Wh.",
    imageUrl: "./assets/img/vttorbea.jpg",
    averageRating: "5.0",
  },
  {
    id: "10",
    name: "VTT PIVOT MACH 4 SL",
    price: "7199",
    description:
      "Tout-suspendu de Cross-Country 29 pouces, cadre du Mach 4 SL s'affiche comme l'un des plus légers du marché, manchons durs en EPS tapissés. Standard Boost (110/148 mm)",
    imageUrl: "./assets/img/vttpivot.jpg",
    averageRating: "5.0",
  },
];

const cartItems = [products[0], products[2], products[3]];

const app = express();
app.use(bodyParser.json());

//creer un produit
app.post("/api/products", (req, res, next) => {
  delete req.body._id;
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Le produit à été enregistré !" }))
    .catch((error) => res.status(400).json({ error: error }));
});

//recuperer tous les produits
app.get("/api/products", (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error: error }));
});

//récuperer un produit par son id
app.get("/api/products/:productId", (req, res, next) => {
  Product.findOne(
    { _id: req.params.productId },
    { ...req.body, _id: req.params.id }
  )
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error: error }));
});

//modifier un produit recuperer par son id
app.put("/api/products/:productId", (req, res, next) => {
  Product.updateOne({ _id: req.params.productId })
    .then((products) => res.status(201).json(products))
    .catch((error) => res.status(404).json({ error: error }));
});

//supprimer un produit par son id
app.delete("/api/products/:productId", (req, res) => {
  Product.deleteOne({ _id: req.params.productId })
    .then((products) => res.status(200).json({ message: "Le produit à été supprimé !"}))
    .catch((error) => res.status(404).json({ error: error }));
});




app.get("/api/users/:userId/cart", (req, res) => {
  User.findOne({ _id: req.params.userId })
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(404).json({ error: error }));
  res.status(200).json(cartItems);
});

app.post("/api/users/:userId/cart", (req, res) => {
  const { productId } = req.body;
  const product = products.find((product) => product.id === productId);
  if (product) {
    cartItems.push(product);
    res.status(200).json(cartItems);
  } else {
    res.status(404).json("produit introuvable");
  }
});

app.delete("/api/users/:userId/cart/:productId", (req, res) => {
  const { productId } = req.params;
  cartItems.filter((product) => product.id !== productId);
  res.status(200).json(cartItems);
});

module.exports = app;
