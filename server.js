const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/data.json', (req, res) => {
  fs.readFile('public/data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading data');
    } else {
      res.send(data);
    }
  });
});

app.post('/data.json', (req, res) => {
  fs.writeFile('public/data.json', JSON.stringify(req.body), 'utf8', (err) => {
    if (err) {
      res.status(500).send('Error writing data');
    } else {
      res.send('Data updated successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});