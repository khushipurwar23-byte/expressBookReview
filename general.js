const axios = require('axios');

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/books');
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Call functions
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Author A");
getBooksByTitle("Book One");