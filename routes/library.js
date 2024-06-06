const express = require('express');
const route = express.Router();
const { addBooks, getBooks, getBookByTitle, loan, deleteBook } = require('../controllers/books');

// /api/books
/**
 * @swagger
 * /books:
 *  post:
 *    summary: Add a new book to the database
 *    description: Adds a new book with the date it was added, also with if it was loaned out, which by default is false
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              author:
 *                type: string
 *              dateAdded:
 *                type: string
 *                format: date
 *              loan:
 *                type: boolean
 *                default: false
 *    responses:
 *      201:
 *        description: Book added successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                title:
 *                  type: string
 *                author:
 *                  type: string
 *                dateAdded:
 *                  type: string
 *                  format: date
 *                loan:
 *                  type: boolean
 *      400:
 *        description: Bad Request
 */

route.post('/books', addBooks);

// /api/books
/**
 * @swagger
 * /books:
 *  get:
 *    summary: Returns details about books
 *    description: Returns all details about every book
 *    responses:
 *      200:
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  author:
 *                    type: string
 *                  dateAdded:
 *                    type: string
 *                    format: date
 *                  loan:
 *                    type: boolean
 *      400:
 *        description: Bad request
 */

route.get('/books', getBooks);

// /api/books/:title
/**
 * @swagger
 * /books/{title}:
 *  get:
 *    summary: Returns a particular book by title
 *    parameters:
 *      - in: path
 *        name: title
 *        required: true
 *        schema:
 *          type: string
 *        description: The title of the book to retrieve
 *    responses:
 *      200:
 *        description: Returns the book with that title
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                title:
 *                  type: string
 *                author:
 *                  type: string
 *                dateAdded:
 *                  type: string
 *                  format: date
 *                loan:
 *                  type: boolean
 *      404:
 *        description: Could not find book with that title
 */

route.get('/books/:title', getBookByTitle);

// /api/books/:title
/**
 * @swagger
 * /books/{title}:
 *  put:
 *    summary: Update loan status by title
 *    parameters:
 *      - in: path
 *        name: title
 *        required: true
 *        schema:
 *          type: string
 *        description: The title of the book to update
 *      - in: body
 *        name: loanStatus
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            loan:
 *              type: boolean
 *        description: Updated loan status of the book
 *    responses:
 *      200:
 *        description: Update successful
 *      400:
 *        description: Update failed
 */

route.put('/books/:title', loan);

// /api/books/:title
/**
 * @swagger
 * /books/{title}:
 *  delete:
 *    summary: Delete a book by title
 *    parameters:
 *      - in: path
 *        name: title
 *        required: true
 *        schema:
 *          type: string
 *        description: The title of the book to delete
 *    responses:
 *      200:
 *        description: Book deleted successfully
 *      400:
 *        description: Book deletion failed
 */

route.delete('/books/:title', deleteBook);

module.exports = route;