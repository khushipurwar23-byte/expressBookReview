const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// ✅ Get all books
async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`);
        console.log("All Books:");
        console.log(res.data);
    } catch (err) {
        console.error("Error fetching books:", err.response?.data || err.message);
    }
}

// ✅ Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        
        if (!res.data || Object.keys(res.data).length === 0) {
            console.log("Book not found");
        } else {
            console.log(`Book with ISBN ${isbn}:`);
            console.log(res.data);
        }

    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
    }
}

// ✅ Get books by author
async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`${BASE_URL}/books/author/${author}`);

        if (!res.data || res.data.length === 0) {
            console.log("No books found for this author");
        } else {
            console.log(`Books by ${author}:`);
            console.log(res.data);
        }

    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
    }
}

// ✅ Get books by title
async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`${BASE_URL}/books/title/${title}`);

        if (!res.data || res.data.length === 0) {
            console.log("No books found with this title");
        } else {
            console.log(`Books with title "${title}":`);
            console.log(res.data);
        }

    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
    }
}
// Fetch all books from API
async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`);
        console.log("Fetched all books successfully");
        console.log(res.data);
    } catch (err) {
        console.error("Error fetching books:", err.response?.data || err.message);
    }
}

// 🔥 Run all
(async () => {
    await getAllBooks();
    await getBookByISBN(1);
    await getBooksByAuthor("Author A");
    await getBooksByTitle("Book One");
})();