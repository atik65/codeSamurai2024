# Bookstore App

This Node.js Express application manages a bookstore and connects to a MongoDB database.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/)

## Getting Started

1. **Clone the Project:**

   ```bash
   git clone https://github.com/yourusername/bookstore-app.git
   cd bookstore-app
   ```

2. **Set Up MongoDB:**

   Create a `.env` file in the project root:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://username:password@your-mongodb-host:27017/BookStore?retryWrites=true&w=majority
   ```

   Replace `username`, `password`, and `your-mongodb-host` with your MongoDB credentials and host information.

3. **Build and Run the Docker Image:**

   ```bash
   docker build --tag=sol:latest .
   docker run -it -p 5000:5000 --rm --name=sol sol:latest
   ```

4. **Access the App:**

   Open [http://localhost:5000](http://localhost:5000) in your browser.

## Stopping the Application

To stop the Docker container, press `Ctrl+C` in the terminal.

## Notes

- Check the `.env` file for MongoDB configuration.

- Adjust MongoDB connection string if needed.

## Author

[Your Name]
