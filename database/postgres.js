require('dotenv').config()
const {Pool,Client} = require ('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    password: 'password',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: 'shmetsy'
})


pool.query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'images'",
  (err, res) => {
    if (err) {
      console.log('creating new table',err)
      pool.query("CREATE TABLE images(Id integer primary key, url1 varchar(100), url2 varchar(100), url3 varchar(100), url4 varchar(100), url5 varchar(100), url6 varchar(100),  url7 varchar(100), url8 varchar(100), url9 varchar(100), url10 varchar(100), url11 varchar(100), url12 varchar(100), url13 varchar(100), url14 varchar(100), url15 varchar(100), url16 varchar(100))",
    
      (err, res) => {
        if (err) {
          console.log('Error creating table',err)
        } else {
          console.log("copying file")
          pool.query("COPY images FROM '../products.csv' DELIMITER ',' csv header",
            (err, res) => {
              if (err) {
                console.log('Error copying info from csv file',err)
              } else {
                console.log("DONE!")        
              }
            }
          )}
      })
    
    } else {
      console.log("table existed, ready!")
      
        
    }
  }
)

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