let uuid = require('uuid/v1');
let books = [];


books.push(
    {
        id: uuid(),
        isbn: "978-3-548-26308-3",
        title: "Es",
        author: "Stephen King",
        publisher: "Ullstein",
        year: 2005,
        genre: "Horror",
        condition: "New",
        available: true
    },
    {
        id: uuid(),
        isbn: "978-3-548-26308-3",
        title: "Schnelles Denken, langsames Denken",
        author: "Daniel Kahneman",
        publisher: "Penguin Verlag",
        year: 2016,
        genre: "Sachbuch",
        condition: "New",
        available: true
    },
    {
        id: uuid(),
        "isbn": "19-420-5805",
        "title": "Grin Without a Cat, A (Fond de l'air est rouge, Le)",
        "author": "Maéna",
        "publisher": "Leptosiphon floribundum (A. Gray) J.M. Porter & L.A. Johnson ssp. glaber (R. Patt.) J.M. Porter & L.A. Johnson",
        "year": 2006,
        "genre": "Documentary",
        "available": false,
        condition: "New",
    }, {
    id: uuid(),
    "isbn": "70-591-3166",
    "title": "The Trans-Atlantic Mystery",
    "author": "Rébecca",
    "publisher": "Lupinus albicaulis Douglas",
    "year": 2003,
    "genre": "(no genres listed)",
    "available": false,
    condition: "New",
}, {
    id: uuid(),
    "isbn": "15-778-8390",
    "title": "Song of the South",
    "author": "Céline",
    "publisher": "Agrostis canina L.",
    "year": 2004,
    "genre": "Adventure|Animation|Children|Musical",
    "available": true,
    condition: "New",
}, {
    id: uuid(),
    "isbn": "43-158-6850",
    "title": "Murder, My Sweet",
    "author": "Dafnée",
    "publisher": "Sisyrinchium langloisii Greene",
    "year": 1998,
    "genre": "Crime|Film-Noir|Thriller",
    "available": false,
    condition: "New",
}, {
    id: uuid(),
    "isbn": "88-731-1849",
    "title": "Bass Ackwards",
    "author": "Clélia",
    "publisher": "Mimulus lewisii Pursh",
    "year": 1998,
    "genre": "Drama",
    "available": false,
    condition: "New",
}


);

const addBook = book => {
    const id = uuid();
    let newBook = {
        ...book,
        id: id
    }
    books.push(newBook);
    return newBook;
}

const updateBook = book => {
    const index = books.findIndex(element => element.id === book.id);
    books[index] = book;
    return books[index];
}

const removeBook = id => {
    const bookToRemove = books.find(book => book.id === id);
    books = books.filter(book => book.id !== id);
    return bookToRemove;
}

const getAllBooks = () => {
    return books;
}

const getBookById = id => {
    return books.find(book => book.id === id);
}

const setAvailable = (id) => {
    const index = books.findIndex(book => book.id === id);
    books[index] = { ...books[index], available: !books[index].available };
    return books[index];
}

module.exports = {
    addBook,
    updateBook,
    removeBook,
    getAllBooks,
    getBookById,
    setAvailable
}