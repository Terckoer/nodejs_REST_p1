const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    name: String,
    year: Number,
    price:{type:Number, default:0},
    author:String,
    category: {
        type:String, enum:['Mistery', 'Action', 'Comedy']
    },
    description:String,
});

module.exports = mongoose.model('Book', bookSchema);

