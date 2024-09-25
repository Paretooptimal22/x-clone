import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//middleware
app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log("Servier is running on port 8000");
});
