const User = require("../models/User");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// UPDATE USER
exports.updateUser = asyncHandler(async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // { new: true } - Will display the updated changes

    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } else {
    res.status(401).json("You can only update your account!");
  }
  next();
});

// DELETE USER
exports.deleteUser = asyncHandler(async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);

    await Post.deleteMany({ username: user.username });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
    next();
  }
});

// GET USER
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  const { password, ...others } = user._doc;

  res.status(200).json(others);
  next();
});
