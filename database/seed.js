var faker = require('faker');


const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'shmetsy'
});

connection.connect();

for (var i = 9; i < 100; i++) {
  var productid = (Math.floor(Math.random() * 9) + 2);
  var colorName = faker.commerce.color();
  var randomUrlImgID = (Math.floor(Math.random() * 20) + 1);
  var colorURL = `https://hrr45fec.s3-us-west-1.amazonaws.com/dummypics/${randomUrlImgID}.jpg`;
  var colorEnlargedURL = `https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/${randomUrlImgID}.jpg`;

  var queryString = `INSERT INTO colors (product_id, color_name, color_url) VALUES (${productid} , "${colorName}", "${colorURL}");`;
  var queryString1 = `INSERT INTO colors_enlarged (product_id, color_name, color_url) VALUES (${productid} , "${colorName}", "${colorEnlargedURL}");`;
  connection.query(queryString, (err) => {
    if (err) {
      console.log("there has been an error in adding dummy data");
    }
  });
  connection.query(queryString1, (err) => {
    if (err) {
      console.log("there has been an error in adding dummy data");
    }
  });
}

//INSERT INTO colors (product_id, color_name, color_url) VALUES ( , "", "");
