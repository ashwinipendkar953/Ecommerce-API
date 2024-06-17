const express = require("express");
const { initializeDatabase } = require("./db/db.conn");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "*",
  Credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

initializeDatabase();

// use the product routes
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
