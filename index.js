const express = require('express');

const PORT = 8000;

const app = express();

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Server is running...' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
