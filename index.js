const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const PORT = 8000;

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(logger('dev'));

app.get('/health', (_req, res) => {
  res.status(200).json({ message: 'Server is running...' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
