const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
