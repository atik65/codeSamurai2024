const router = require("express").Router();
const bookRoute = require("../routes/books");
const generalRoute = require("../routes/generalRoute");

// router.get("/", (req, res) => {
//   res.send("Welcome to the book store");
// });

// router.use("/api/v1/auth", authRoute);

// router.use(generalRoute)

// router.get("/", (_req, res, _next) => {
//   res.status(200).json({
//     message: "Welcome to root route!",
//   });
// });
router.use(generalRoute);
router.use("/api/v1/books", bookRoute);

module.exports = router;
