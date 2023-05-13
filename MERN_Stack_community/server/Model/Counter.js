//post id 만들기..

const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema(
  {
    name: String,
    postNum: Number,
  },
  { collection: 'counter' }
);
const Counter = mongoose.model('counter', counterSchema);

module.exports = { Counter };
