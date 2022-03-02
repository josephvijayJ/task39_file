const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');

let date = new Date();
let time =
  date.getDate() +
  '-' +
  date.getMonth() +
  '-' +
  date.getFullYear() +
  '-' +
  date.getHours() +
  '-' +
  date.getMinutes() +
  '-' +
  date.getSeconds();
let file = time + '.txt';
let timeStamp = date.getTime().toString();

let options = {
  origin: '*',
};
app.use(cors(options));

app.get('/time', function (req, res) {
  console.log('entered to file');
  res.json(
    fs.writeFile(file, timeStamp, function (err) {
      if (err) throw err;
      console.log('File Created !');
    })
  );
});

app.listen(3001, () => {
  console.log('connected to server');
});
