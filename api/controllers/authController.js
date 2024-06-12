const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler(async (req, res, next) => {
  let { username, email, password } = req.body;

  // Create New User
  const user = await User.create({
    username,
    email,
    password,
  });

  // Create token
  const token = user.getSignedJwtToken();
  password = { password, ...others } = user._doc;
  res.status(200).json({ success: true, data: others });
  next();
});

// exports.register = async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedpass = await bcrypt.hash(req.body.password, salt);

//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedpass,
//     });

//     await user.save();

//     const { password, ...others } = user._doc;

//     res.status(201).json({ others });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json({ msg: "Wrong credentials..." });

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json({ msg: "Wrong credentials..." });

    const { password, ...others } = user;

    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json({ error });
  }
};
