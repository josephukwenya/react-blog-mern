const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

// DB connection
connectDB();

app.listen("5000", () => {
  console.log("Backend running...");
});
