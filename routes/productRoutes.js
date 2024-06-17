const express = require("express");
const router = express.Router();
const Product = require("../models/products.models");

// route to add product
router.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res
      .status(200)
      .send({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// route to get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// route to get product by id
router.get("/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (product) {
      res.status(200).send({ product });
    } else {
      res.status(404).send({ error: "Product not found." });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
