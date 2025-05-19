import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors(), express.json());

// Health check
app.get('/', (_req, res) => {
  res.send('✅ Backend is running!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
