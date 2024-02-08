const router = require("express").Router();

router.get("/", (_req, res, _next) => {
  res.status(200).json({
    message: "Welcome to root route!",
  });
});

module.exports = router;
