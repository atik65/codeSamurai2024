require("dotenv").config();

const http = require("http");
const app = require("./app/app");
const createDb = require("./db/createDb");
const Book = require("./models/Book");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

// createDb(
//   `mongodb+srv://bookstore:vSIr6W0cwr8oXojf@cluster0.tx5hg.mongodb.net/BookStore?retryWrites=true&w=majority`
// )
//   .then(() => {
//     console.log("Database connected successfully");
//     server.listen(port, () => {
//       console.log("App is running in port ", port);
//     });
//   })
//   .catch((e) => {
//     console.log("Database connection failed.");
//   });

// clear the database before starting the server

const clearDatabase = async () => {
  try {
    await Book.deleteMany({});
    console.log("Database cleared successfully");
  } catch (error) {
    console.error("Error clearing the database:", error);
  }
};

createDb(
  `mongodb+srv://bookstore:vSIr6W0cwr8oXojf@cluster0.tx5hg.mongodb.net/BookStore?retryWrites=true&w=majority`
)
  .then(() => {
    console.log("Database connected successfully");

    // Clear the database before starting the server
    clearDatabase().then(() => {
      server.listen(port, () => {
        console.log("App is running in port ", port);
      });
    });
  })
  .catch((e) => {
    console.log("Database connection failed.");
  });
