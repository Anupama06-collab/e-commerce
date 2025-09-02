import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const products = [
  {
    name: "Rainbow Hoodie",
    price: 250,
    image: "https://via.placeholder.com/300x200.png?text=Rainbow+Hoodie",
  },
  {
    name: "Colorful Backpack",
    price: 350,
    image: "https://via.placeholder.com/300x200.png?text=Colorful+Backpack",
  },
  {
    name: "Colorful Socks Pack",
    price: 120,
    image: "https://via.placeholder.com/300x200.png?text=Colorful+Socks",
  },
];
console.log("MONGO_URI is:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected ✅");
    await Product.deleteMany(); // Clear old products
    await Product.insertMany(products); // Insert new products
    console.log("Products seeded ✅");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error seeding products ❌", err));
