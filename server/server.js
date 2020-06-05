require('newrelic');
const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('../database/postgres');

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
 app.get('/', (req, res) => {
   res.redirect('/1');
 });
app.use('/:id', express.static('client/dist'));


app.get('/api/carousel/:id', (req,res) => {
  
  const id = req.params;
  pg.getImages(id, (err, data) => {
    if (err) {
      console.log('Error getting info', err);
    } else {
      urls = data['rows'][0]
      
      var result=[];
      for ( var keys in urls) {
        var url = urls[keys]
        if (keys !== 'id') {
          if (url !== null) {
          var extract = url.slice(-11);
          if (extract !== '500x500.jpg') {
            result.push(url);
          }
        }
      }
    }
    res.send(result)
    }
  })
})

app.get('/api/carouselEnlarged/:id', (req,res) => {
  
  const id = req.params;
  pg.getImages(id, (err, data) => {
    if (err) {
      console.log('Error getting info', err);
    } else {
      urls = data['rows'][0]
      
      var result=[];
      for ( var keys in urls) {
        var url = urls[keys]
        if (keys !== 'id') {
          if (url !== null) {
          var extract = url.slice(-11);
          if (extract === '500x500.jpg') {
            result.push(url);
          }
        }
      }
    }
    res.send(result)
    }
  })
})

let port = 9000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
