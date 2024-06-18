const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// CREATE POST
exports.createPost = asyncHandler(async (req, res, next) => {
  const newPost = await Post.create({
    title: req.body.title,
    desc: req.body.desc,
    photo: req.body.photo,
    username: req.body.username,
    categories: req.body.categories,
  });

  const post = await newPost.save();

  res.status(201).json({
    success: true,
    post,
  });
  next(res.status(404).json({ msg: "Something went wrong!" }));
});

// UPDATE POST
exports.updatePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username) {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ success: true, updatedPost });
  } else {
    next(res.status(404).json({ msg: "You can only update your post" }));
  }
});

// DELETE POST
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username) {
    await Post.delete();
    res.status(200).json("Deleted");
  } else {
    next(res.status(404).json({ msg: "You can only delete your post" }));
  }
});

// GET SINGLE POST
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  res.status(200).json({ post });
  next(res.status(404).json({ msg: "Something went wrong!" }));
});

// GET ALL POSTS
exports.getAllPosts = asyncHandler(async (req, res, next) => {
  const username = req.query.user;
  const catName = req.query.cat;

  let posts;
  if (username) {
    posts = await Post.find({ username });
  } else if (catName) {
    posts = await Post.find({ categories: { $in: [catName] } });
  } else {
    posts = await Post.find();
  }

  res.status(200).json({ result: posts.length, posts });
  next(res.status(404).json({ msg: "Something went wrong!" }));
});
