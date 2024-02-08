const error = require("../errors/customError");

const {
  findBooks,
  findBookByProperty,
  createNewBook,
  updateBook,
  deleteBook,
} = require("../service/book");

const getBooks = async (req, res, next) => {
  /**
   * TODO: filter , sort
   */

  const query = {
    title: { $regex: new RegExp(req?.query?.title || "", "i") }, // Case-insensitive partial match
    price: req?.query?.price || 0,
    genre: { $regex: new RegExp(req?.query?.genre || "", "i") }, // Case-insensitive partial match
    author: { $regex: new RegExp(req?.query?.author || "", "i") }, // Case-insensitive partial match
  };

  // Sorting options
  const sortField = req.query.sortBy || "title"; // Default to sorting by title
  const sortOrder = req.query.order || "asc"; // Default to ascending order

  const sortOptions = { [sortField]: sortOrder === "desc" ? -1 : 1 };

  try {
    const books = await findBooks(query, sortOptions);
    return res.status(200).json(books);
  } catch (e) {
    next(e);
  }
};

const getBookById = async (req, res, next) => {
  const { bookId } = req.params;

  try {
    const book = await findBookByProperty("_id", bookId);
    if (!book) {
      throw error(404, "Book not found.");
    }
    return res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

const postBook = async (req, res, next) => {
  const { title, price, genre, author } = req.body;

  try {
    const book = await createNewBook({
      title,
      price,
      genre,
      author,
    });

    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

const putBookById = async (req, res, next) => {
  const { bookId } = req.params;
  const { title, price, genre, author } = req.body;

  try {
    const book = await updateBook(bookId, {
      title,
      price,
      genre,
      author,
    });

    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

const deleteBookById = async (req, res, next) => {
  const { bookId } = req.params;

  try {
    const book = await deleteBook(bookId);
    if (!book) {
      throw error(404, "Book not found.");
    }
    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getBooks,
  getBookById,
  postBook,
  putBookById,
  deleteBookById,
};
