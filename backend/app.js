const express = require('express');
const app = express();
const corsOptions = require('./config/corsConfig');
const cors = require('cors');
const port = 8005;

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

module.exports = app;
