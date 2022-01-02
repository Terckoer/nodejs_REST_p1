'use strict'
const express = require('express');
const api = express.Router();
const booksController = require('../controllers/books');


//REST
api.get('/', function(req, res) {
    res.send('hello world');
});
api.get('/book',booksController.getBooks);
api.get('/book/:bookId',booksController.getBook);
api.post('/book',booksController.addBook);
api.put('/book/:bookId', booksController.updateBook);
api.delete('/book/:bookId', booksController.deleteBook);

module.exports = api;