import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

import connectMongoDB from "./db/connectMongDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); //middleware to parse req.body
app.use(express.urlencoded({ extended: true })); //middleware to parse form data(urlencoded)
app.use(cookieParser()); //middleware to parse cookie

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
