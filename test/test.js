var db = require('./database/index.js');

describe('get a positive response from the database', () => {
  it('should output err to be Null', () => {
    return db.getImgByProductId(1, (err, result) => {
      return expect(err).toBe(null);
    });
  });
});

describe('grab the the product url from database', () => {
  it('should output the product URL', () => {
    return db.getImgByProductId(1, (err, result) => {
      return expect(result[0].color_url).toBe("https://hrr45fec.s3-us-west-1.amazonaws.com/newmasks/1.jpg");
    });
  });
});