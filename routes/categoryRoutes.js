const express = require("express");
const router = express.Router();
const Category = require("../models/categories.models");

// route to get all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// route to get category by catetgoryId
router.get("/categories/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (category) {
      res.status(200).send({ category });
    } else {
      res.status(404).send({ error: "Category not found." });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
