const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const libraryRoute = require('./routes/library');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

app.use(express.json());

// Swagger Configurations
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Library API Documentation',
      description: 'CRUD API for managing books in library',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js'] // Path to API routes 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api', libraryRoute);

// Start server
mongoose.connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
