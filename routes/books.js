const bookController = require("../controllers/bookController");

const router = require("express").Router();

/**
 * get books by bookId or title
 * @route api/v1/books/id
 * @method GET
 * @visibility private
 */
router.get("/:bookId", bookController.getBookById);

/**
 * get all books include
 * - filter
 * @route api/v1/books
 * @method GET
 * @visibility private
 */

router.get("/", bookController.getBooks);

/**
 * create new book
 * @route api/v1/books
 * @method POST
 * @visibility private
 */

router.post("/", bookController.postBook);

/**
 * update book by bookId or title
 * @route api/v1/books/id
 *  @method PATCH
 * @visibility private
 */

// router.patch("/:bookId", bookController.patchBookById);

/**
 * update book by bookId or title
 * @route api/v1/books/id
 * @method PUT
 * @visibility private
 */

router.put("/:bookId", bookController.putBookById);

/**
 * delete book by bookId or title
 * @route api/v1/books/id
 * @method DELETE
 * @visibility private
 */

router.delete("/:bookId", bookController.deleteBookById);

module.exports = router;
