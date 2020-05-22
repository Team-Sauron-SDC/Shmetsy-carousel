var faker = require('faker');
var fs = require('fs');

const seeding = function(num) {
var data = {}
  for (var i = 1; i < num; i++) {
    var product = {};
    product['productid'] = i; // necessary????
    var numColors = (Math.floor(Math.random() * 7) + 1)
    for ( var j = 1; j <= numColors; j++) {
      //to not repeat colors inside the obj
      var colorName = faker.commerce.color();

      var randomColor = function (color) {
        if (product[color]!== undefined) {
          //if the color already exists, generate a new color
          randomColor(faker.commerce.color());
        } else {
          return color;
        }
      }

      colorName = randomColor(colorName);
      var randomUrlImgID = (Math.floor(Math.random() * 20) + 1);//I should 500 large images and 500 small images //change back to 499 when you have 1000 pics on s3
      var colorURL = `https://hrr45fec.s3-us-west-1.amazonaws.com/dummypics/${randomUrlImgID}.jpg`;
      var colorEnlargedURL = `https://hrr45fec.s3-us-west-1.amazonaws.com/newmasksenlarge/${randomUrlImgID}.jpg`;

      product[colorName] = [colorURL, colorEnlargedURL];

    }
    data[i] = product //change for a random name???
    var object = '\n' + JSON.stringify(data[i])
    fs.appendFile('datagen.txt', object, (err) => {
      if(err) throw err;
      
    } )
  }
  console.log('done')
}

console.time('test');
//some code
console.log(seeding(500000))
console.timeEnd('test');

