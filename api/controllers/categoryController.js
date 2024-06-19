const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");

exports.createCategory = asyncHandler(async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    const savedCategory = await newCategory.save();

    res.status(201).json({ success: true, savedCategory });
  } catch (error) {
    console.log(error);
    next(res.status(404).json({ error }));
  }
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.find();

    res.status(200).json({ success: true, category });
  } catch (error) {
    console.log(error);
    next(res.status(404).json({ error }));
  }
});
