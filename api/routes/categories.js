const router = require("express").Router();
const {
  createCategory,
  getCategory,
} = require("../controllers/categoryController");

router.post("/", createCategory);
router.get("/", getCategory);

module.exports = router;
