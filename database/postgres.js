const dotenv = require('dotenv').config();
const {Pool,Client} = require ('pg')


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

const getImages = (id, callback) => {

  const queryString = `SELECT * FROM images where id=${id.id}`
  pool.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(err,result);
    }
    
  }
  )

}


module.exports = {getImages};
