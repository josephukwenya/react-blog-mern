const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../utils/errorResponse");

// CREATE POST
exports.createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ savedPost });
  } catch (err) {
    next(err);
  }
};

// UPDATE POST
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ updatedPost });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    next(err);
  }
};

// DELETE POST
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    next(err);
  }
};

// GET SINGLE POST
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return next(new ErrorResponse(`Post NOT Found`, 404));

    res.status(200).json({ post });
  } catch (err) {
    next(new ErrorResponse(`Post not found with ID of ${req.params.id}`, 404));
  }
};

// GET ALL POSTS
exports.getAllPosts = async (req, res, next) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
};
