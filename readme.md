# Bookstore App

This is a Node.js Express application for a bookstore. The application connects to a MongoDB database to manage books.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/)

## Getting Started

1. Clone or download the project ZIP file.
2. navigate to bookStore directory

3. build docker image:
   docker build --tag=sol:latest .
4. run docker container:
   docker run -it -p 5000:5000 --rm --name=sol sol:latest
