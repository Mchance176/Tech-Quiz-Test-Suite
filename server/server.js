import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Add route for random questions
app.get('/api/questions/random', (req, res) => {
  try {
    // Mock data for testing
    const questions = [
      {
        question: "What does HTML stand for?",
        answers: [
          { text: "Hyper Text Markup Language", isCorrect: true },
          { text: "High Tech Modern Language", isCorrect: false },
          { text: "Hyper Transfer Markup Language", isCorrect: false },
          { text: "None of the above", isCorrect: false }
        ]
      }
    ];
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});