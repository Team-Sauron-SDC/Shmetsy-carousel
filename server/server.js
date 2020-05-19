const express = require('express');
let app = express();
const db = require('../database/index');
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//   res.redirect('/1');
// });
app.use('/:id', express.static('client/dist'));
app.get('/api/carousel/:id', (req, res) => {
  console.log('params', req.params);
  db.getImgByProductId(Number(req.params.id), (err, data) => {
    if (err) {
      //console.log(err)
      res.status(400).send();
    } else {
      //console.log(data);
      //console.log('here')
      res.status(200).send(data);
    }
  });
});

app.get('/api/carouselEnlarged/:id', (req, res) => {
  console.log('params', req.params);
  db.getImgEnlargedByProductId(Number(req.params.id), (err, data) => {
    if (err) {
      //console.log(err)
      res.status(400).send();
    } else {
      //console.log(data);
      //console.log('here')
      res.status(200).send(data);
    }
  });
});



app.use(express.static(__dirname + '/../client/dist'));
console.log('server is working!')


let port = 9000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});