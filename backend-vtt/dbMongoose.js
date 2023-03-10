const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://OlivierBenoit:Tigerwood0440@clustertest.i1tkd.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
