const error = (statusCode = 500, message = "Something went wrong.") => {
  const customError = new Error(message);
  customError.status = statusCode;
  return customError;
};

module.exports = error;
