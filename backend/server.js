import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongDB.js";

dotenv.config();

const app = express();

//middleware
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Servier is running on port 8000");
  connectMongoDB();
});
