const {Pool,Client} = require ('pg')



const pool = new Pool({
    user: "jimena",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "shmetsy"
})



/*pool.query("CREATE TABLE images(Id int, url1 varchar(100), url2 varchar(100), url3 varchar(100), url4 varchar(100), url5 varchar(100), url6 varchar(100),  url7 varchar(100), url8 varchar(100), url9 varchar(100), url10 varchar(100), url11 varchar(100), url12 varchar(100), url13 varchar(100), url14 varchar(100), url15 varchar(100), url16 varchar(100))",
  (err, res) => {
    console.log(err, res)
    pool.end()
})*/

pool.query("COPY images(id, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16) FROM '/home/jimena/Desktop/Shmetsy-carousel/database/products.csv' DELIMITER ',' csv header",
  (err, res) => {
    console.log(err, res)
    pool.end()
})

/*client.connect()
 .then(() => console.log('connected@Postgres'))
 .then(()=> client.query(''))
 .then(results => console.table(results.rows))
 .catch( e => console.log('not connected',e))
 .finally(()=> client.end())

 */