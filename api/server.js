const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

// DB connection
connectDB();

app.use("/api/v1/auth", authRoutes);

app.listen("5000", () => {
  console.log("Backend running...");
});
