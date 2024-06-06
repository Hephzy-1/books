const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title:  { 
    type: String,
    unique: true,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now()
  },
  loan: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Books = mongoose.model('books', bookSchema)

module.exports = Books