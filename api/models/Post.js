const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: [true, "Please add a title"],
      unique: true,
    },
    desc: {
      type: "String",
      required: [true, "Please add a description"],
    },
    photo: {
      type: "String",
      required: false,
    },
    username: {
      type: "String",
      required: [true, "Please add a username"],
    },
    categories: {
      type: Array,
      requried: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
