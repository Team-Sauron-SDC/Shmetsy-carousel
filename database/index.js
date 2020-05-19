const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'shmetsy'
});

connection.connect();

var getImgByProductId = (id, callback) => {
  var queryString = `SELECT * FROM colors where product_id = ${id}`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
      console.log('theres an error retreiving all your Color pics');
    } else {
      callback(null, data);
    }
  });
}

var getImgEnlargedByProductId = (id, callback) => {
  var queryString = `SELECT * FROM colors_enlarged where product_id = ${id}`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log(err);
      console.log('theres an error retreiving all your Color pics');
    } else {
      callback(null, data);
    }
  });
}


module.exports.getImgByProductId = getImgByProductId;
module.exports.getImgEnlargedByProductId = getImgEnlargedByProductId;


