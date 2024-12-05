import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connect(process.env.MONGODB_URI || 'mongodb://localhost/tech-quiz')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes for quiz questions
app.get('/api/questions', async (req, res) => {
  try {
    // Add your question fetching logic here
    res.json([/* your questions */]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});