const express = require('express');
let app = express();
const db = require('../database/index');
const path = require('path');
const bodyParser = require('body-parser');
const crud = require('../database/crud')
const pg = require('../database/postgres');

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//   res.redirect('/1');
// });
app.use('/:id', express.static('client/dist'));

/*POSTGRESQL
app.get('/api/carousel/:id', (req,res) => {
  console.log("GET PARAMS",req.params)
  const id = req.params;
  pg.getImages(id, (err, data) => {
    if (err) {
      console.log('Error getting info', err);
    } else {
      console.log("here",data)
      res.send(data)
    }
  })
})
*/
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