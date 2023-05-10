const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
  },
  { collection: "posts" }
);
const Post = mongoose.model("posts", postSchema);

module.exports = { Post };
