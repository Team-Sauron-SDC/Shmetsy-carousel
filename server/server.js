require('newrelic');
const express = require('express');
let app = express();
const db = require('../database/index');
const path = require('path');
const bodyParser = require('body-parser');
const crud = require('../database/crud')
const pg = require('../database/postgres');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


 app.get('/', (req, res) => {
   res.redirect('/1');
 });
app.use('/:id', express.static('client/dist'));

//POSTGRESQL
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

/* ORIGINAL
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
});*/

/* API HANDLERS FOR CRUD
app.get('/api/carousel/:id', (req, res) => {
  
  crud.read(Number(req.params.id), (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/carousel/:id', (req, res) => {
  
  var table = 'colors';
  crud.create(table, req.body, (err, data) => {
    if (err) {
      res.status(400).send(); 
    } else {
      res.send('datasaved!')
    }
  })
})

app.delete('/api/carousel/:id', (req, res) => {
  
  var table = 'colors';
  crud.delete(table, req.body, (err, data) => {
    if (err) {
      res.status(400).send(); 
    } else {
      res.send('datadeleted!')
    }
  })
})

app.put('/api/carousel/:id', (req, res) => {
  console.log('params', req.body);
  var table = 'colors';

  crud.update(table, req.body, Number(req.params.id) ,(err, data) => {
    if (err) {
      res.status(400).send(); 
    } else {
      res.send('dataupdated!')
    }
  })
})
*/

app.use(express.static(__dirname + '/../client/dist'));
console.log('server is working!')


let port = 9000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});