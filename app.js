const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/movie', (req, res) => {
  res.send('movies!');
});

app.listen(8000, () => {
  console.log('Server listening on PORT 8000');
});
