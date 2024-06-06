# books
This project is a simple RESTful API built with Express.js for managing a collection of books.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is an API built for managing a collection of books. It allows adding books to the database, updating the loan status of the book, getting all the books in the database or just one particular book and it also allows for the deletion of a book. It is useful in a library setting where one has to keep track of all the books available

## Installation

Provide step-by-step instructions on how to set up the project locally.
To set up the project locally:
1. Clone the repository using this link https://github.com/Hephzy-1/books.git
2. Navigate to the cloned repository
3. Download the dependencies using npm install

```bash

# Clone the repository
git clone https://github.com/Hephzy-1/books.git

# Navigate to the project directory
cd books

# Install dependencies
npm install 

```

## Usage
You can run the project using nodemon

```bash

# Start the server
npm start

```

Your output should be similar to 

```bash

Server is running on port 3000

```

## API Endpoints

Here are the available API endpoints:

### GET /books
This endpoint retrieves all the books in the database.

```http

GET /api/books

```

#### Responses
`200 OK` - Returns all books
`400 Bad Request` - Invalid Request

### GET /books/:title
This endpoint retrieves a single book by its id.

```http

GET /api/books/{title}

```

#### Path Parameter
`title` - The title of the book

#### Responses
`200 OK` - Returns the book with the specified title
`404 Not Found` - Book not found

### POST /books
This endpoint adds a new book to the database. The request body should contain the book details in JSON

```http

POST /api/books

```

#### Request Body
```json

{
  "title": "Book Title",
  "author": "Author Name"
}


```

#### Responses
`201 Created` - Book added successfully
`400 Bad Request` - Invalid input

### PUT /books/:title
This endpoint updates a single book by its id. The request body should contain the updated book details in JSON

```http

PUT /api/books/{title}

```

#### Path Parameter
`title` - The title of the book

#### Request Body

```json

{
  "title": "Book Title",
  "loan": true
}

```

#### Responses
`200 OK` - Book updated successfully
`404 Not Found` - Book not found

### DELETE /books/:title
This endpoint deletes a single book by its id.

```http

DELETE /api/books/{title}

```

#### Path Parameter
`title` - The title of the book

#### Request Body

```json

{
  "title": "Book Title"
}

```

#### Responses
`200 OK` - Book deleted successfully
`404 Not Found` - Book not found
