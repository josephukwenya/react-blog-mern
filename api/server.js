const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// DB connection
connectDB();

// Multer - file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/v1/uploads", upload.single("file"), (req, res) => {
  res.status(200).json({ msg: "File has been uploaded.." });
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/categories", categoriesRoute);

app.listen("5000", () => {
  console.log("Backend running...");
});
