const axios = require('axios');

async function getAllBooks() {
    try {
        const res = await axios.get('http://localhost:5000/books');
        console.log(res.data);
    } catch (err) {
        console.error("Error fetching books:", err.message);
    }
}

async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`http://localhost:5000/books/isbn/${isbn}`);
        console.log(res.data);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`http://localhost:5000/books/author/${author}`);
        console.log(res.data);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`http://localhost:5000/books/title/${title}`);
        console.log(res.data);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Author A");
getBooksByTitle("Book One");