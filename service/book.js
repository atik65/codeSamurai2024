const error = require("../errors/customError");
const Book = require("../models/Book");

const findBooks = (query, sortOptions) => {
  const { title, price, genre, author } = query;
  const filter = {};
  if (title) {
    filter.title = title;
  }
  if (price) {
    filter.price = price;
  }
  if (genre) {
    filter.genre = genre;
  }
  if (author) {
    filter.author = author;
  }

  return Book.find(filter).sort(sortOptions);

  // return Book.find(filter);

  //   return Book.find();
};

const findBookByProperty = (key, value) => {
  if (key == "_id") {
    return Book.findById(value);
  }
  return Book.findOne({
    [key]: value,
  });
};

const createNewBook = ({ title, price, genre, author }) => {
  const book = new Book({
    title,
    price,
    genre,
    author,
  });
  return book.save();
};

const updateBook = async (id, data) => {
  return Book.findByIdAndUpdate(id, { ...data }, { new: true });
};

const deleteBook = async (id) => {
  return Book.findByIdAndDelete(id);
};

module.exports = {
  findBooks,
  findBookByProperty,
  createNewBook,
  updateBook,
  deleteBook,
};
