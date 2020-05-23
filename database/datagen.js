
var fs = require('fs');

const writeProducts = fs.createWriteStream('products.csv');
  writeProducts.write(`id,url1,url2,url3,url4,url5,url6,url7,url8,url9,url10,url11,url12,url13,url14,url15,url16\n`, 'utf8');


function dataGen(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i --;
      id += 1;
      var urls = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
      var numImgPair = (Math.floor(Math.random() * 7) + 1);
      for (var j = 0; j <= numImgPair; j++) {
        var randomUrlImgID = (Math.floor(Math.random() * 499) + 1)
        urls[j]= `https://smegoaccordion.s3.us-east-2.amazonaws.com/${randomUrlImgID}-500x500.jpg`;
        urls[j+1]= `https://smegoaccordion.s3.us-east-2.amazonaws.com/${randomUrlImgID}-small.jpg`;
      }
      const data = `${id}, ${urls[0]}, ${urls[1]}, ${urls[2]},${urls[3]},${urls[4]},${urls[5]},${urls[6]},${urls[7]},${urls[8]},${urls[9]},${urls[10]},${urls[11]},${urls[12]},${urls[13]},${urls[14]},${urls[15]}\n`
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }while ( i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
      console.log('drain ', i)
    }
  }
  write()
}

dataGen(writeProducts, 'utf-8', () => {
  writeProducts.end();
});

