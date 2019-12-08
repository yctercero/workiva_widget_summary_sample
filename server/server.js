const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/widget', async (req, res) => {
  const assetPath = path.join(__dirname, 'assets', 'widgetdata.json');
  // asynchronously read from specified file
  fs.readFile(assetPath, {encoding: 'utf-8'}, (err, asset) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200).send(asset);
    }
  });
});

app.listen(port, () => {
  console.log(`REST API on http://localhost:${port}`)
});
