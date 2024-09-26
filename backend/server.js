import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
