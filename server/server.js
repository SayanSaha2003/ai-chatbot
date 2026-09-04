import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import chatRoutes from './routes/chatRoutes.js';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Chat routes 
app.use('/api/chat', chatRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});