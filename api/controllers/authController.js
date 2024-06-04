const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, email, password, profilePic } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
      profilePic,
    });

    await newUser.save();

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async (req, res) => {
  const { username, email, password } = req.body;
};
