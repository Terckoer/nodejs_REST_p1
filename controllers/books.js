'use strict'
const Book = require('../models/books')

function addBook(req, res){
    console.log(req.body)
    console.log('API POST WORKS??')
    let book = new Book();
    
    book.name = req.body.name;
    book.year = req.body.year;
    book.price = req.body.price;
    book.author = req.body.author;
    book.category = req.body.category;
    book.description = req.body.description;

    book.save((err, bookStored)=>{
        if(err) res.status(500).send({message: 'Error al guardar en la base de datos: '+err});
        res.status(200).send({book: bookStored});
    });
}

function getBooks(req, res){
    Book.find({}, (err, books)=>{
        if(err) return res.status(500).send({message: "Error al realizar la peticion:"+err});
        if(!books) return res.status(404).send({message: "No hay libros"});
        res.status(200).send({ books });
    });
}

function getBook(req, res){
    let bookId = req.params.bookId;
    console.log(req.body);
    Book.findById(bookId, (err, book)=>{
        if(err) return res.status(500).send({message: "Error al realizar la peticion:"+err});
        if(!book) return res.status(404).send({message: "El producto no existe"});
        res.status(200).send({ book });
    });
}

function updateBook(req, res){
    let bookId = req.params.bookId;
    let toUpdate = req.body;
    console.log(req.body);
    Book.findByIdAndUpdate(bookId, toUpdate, (err, bookUpdated)=>{
        if(err) return res.status(500).send({message: "Error al realizar la actualizacion:"+err});
        res.status(200).send({ book: bookUpdated });
    });
}

function deleteBook(req, res){
    let bookId = req.params.bookId;
    console.log(req.body);
    Book.findById(bookId, (err, bookToDelete)=>{
        if(err) return res.status(500).send({message: "Error al realizar la actualizacion:"+err});
        bookToDelete.remove(err =>{
            if(err) return res.status(500).send({message: "Error al realizar la actualizacion:"+err});
            res.status(200).send({ message: "Libro eliminado" });

        });
    });
}




module.exports = {
    deleteBook,
    updateBook,
    getBook,
    getBooks,
    addBook
}