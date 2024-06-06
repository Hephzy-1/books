const Books = require('../models/libraryMod')

// Add new book to database
async function addBooks (req, res) {
  try {
    const { title, author } = req.body;

    // Check if book is already in database
    const check = await Books.findOne({ title });

    if (check) {
      res.status(400).json({message: 'This book already exists in our database'})
    }

    // Create new book object
    const newBook = new Books({
      title,
      author
    })

    // Save new book 
    await newBook.save();

    res.status(201).json({ message: 'Book has been added successfully', details: newBook})

  } catch (err) {
    console.error(err)
    res.status(500).json({message: 'Internal Server Error', error: err.message })
  }
}

// Get all books
async function getBooks (req, res) {
  try {
    const allBooks = await Books.find()

    res.status(200).json({ message: 'Here is all the books', books: allBooks });

  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error', error: error.message })
  }
}

// Get a particular Book
async function getBookByTitle (req, res) {
  try {
    const { title } = req.body;

    // check if book exists
    const check = await Books.findOne({ title });

    if (!check) {
      res.status(404).json({message: 'This book cannot be found'})
    }

    res.status(200).json({ message: 'Here is your book', details: check})
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Internal Server Error', error: err.message })
  }
}

// Update loan status
async function loan (req, res) {
  try {
    const { title, loan } = req.body

    // Check if book exists
    const check = Books.findOne({ title })

    if (!check) {
      res.status(404).json({message: 'This book cannot be found'})
    }

    await Books.updateOne({ title }, { loan })

    res.status(200).json({ message: 'Your book has now been loaned by you'})

  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Internal server error', error: err.message})
  }
}

// Delete book
async function deleteBook (req, res) {
  try {
    const { title } = req.body

    // Check if book exists
    const check = Books.findOne({ title });

    if (!check) {
      res.status(404).json({ message: 'This book cannot be found!'})
    }

    await Books.deleteOne({ title })

    res.status(200).json({ message: 'Book has been deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error', error: err.message })
  }
}

module.exports = {
  addBooks,
  getBooks,
  getBookByTitle,
  loan,
  deleteBook
}