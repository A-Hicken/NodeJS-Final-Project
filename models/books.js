const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Books", bookSchema);
