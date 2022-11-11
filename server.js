const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const rutas = require('./rutas/endpoints')



// settings
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use("/api", rutas);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});


// mongodb connection
   mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
 

// server listening
app.listen(port, () => console.log("Server listening to", port));

