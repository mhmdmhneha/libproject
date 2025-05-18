// src/backend/index.ts
import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('✅ Backend is working!');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API listening at http://localhost:${PORT}`);
});
