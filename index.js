const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

let books = require('./books.json');
let users = [];

// Task 2 - Get all books
app.get('/books', (req, res) => {
    res.send(books);
});

// Task 3 - Get by ISBN
app.get('/books/isbn/:isbn', (req, res) => {
    res.send(books[req.params.isbn]);
});

// Task 4 - Get by author
app.get('/books/author/:author', (req, res) => {
    let result = {};
    Object.keys(books).forEach(key => {
        if (books[key].author === req.params.author) {
            result[key] = books[key];
        }
    });
    res.send(result);
});

// Task 5 - Get by title
app.get('/books/title/:title', (req, res) => {
    let result = {};
    Object.keys(books).forEach(key => {
        if (books[key].title === req.params.title) {
            result[key] = books[key];
        }
    });
    res.send(result);
});

// Task 6 - Get review
app.get('/books/review/:isbn', (req, res) => {
    res.send(books[req.params.isbn].reviews);
});

// Task 7 - Register
app.post('/register', (req, res) => {
    users.push(req.body);
    res.send("User registered successfully");
});

// Task 8 - Login
app.post('/login', (req, res) => {
    res.send("User logged in");
});

// Task 9 - Add review
app.put('/books/review/:isbn', (req, res) => {
    books[req.params.isbn].reviews[req.body.user] = req.body.review;
    res.send("Review added");
});

// Task 10 - Delete review
app.delete('/books/review/:isbn/:user', (req, res) => {
    delete books[req.params.isbn].reviews[req.params.user];
    res.send("Review deleted");
});

// Task 11 - Axios async example
app.get('/async/books', async (req, res) => {
    const response = await axios.get('http://localhost:5000/books');
    res.send(response.data);
});

app.listen(5000, () => console.log("Server running"));