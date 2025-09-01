import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use PORT from environment
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Atlas connection (replace with your URI)
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://e-comm_user:ecomm123@ecommerce.59djlqg.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
