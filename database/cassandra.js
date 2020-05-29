const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1',
    keyspace: 'url_images'
})

client.connect()
    .then(()=> {
        console.log('connected to Cassandra!')})
        .then(()=> {
        const keyspace = "CREATE KEYSPACE IF NOT EXISTS URL_images WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 } AND DURABLE_WRITES = true ;";
        client.execute(keyspace);
        console.log('keyspace created!');
        })

        .then(()=> {
           const table = 'CREATE TABLE images (id int PRIMARY KEY, url1 text, url2 text, url3 text, url4 text, url5 text, url6 text, url7 text, url8 text, url9 text, url10 text, url11 text, url12 text, url13 text, url14 text, url15 text, url16 text)';
           client.execute(table)
           console.log('table created!')
        })
    
    .catch((err) => console.log('connection failed!',err))


const getImages = (id, callback) => {
    const queryString = `SELECT * FROM images where id=${id}`
  
    client.execute(queryString, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(err,result);
      }
      
    })
  
}

const addImg = (data, callback) => {
    const url1 = data.url1;
    const url2 = data.url2;
    
    const queryString = `INSERT INTO URL_images.images(url1,url2) values(${url1},${url2}) `
  
    client.execute(queryString, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(err,result);
        console.log('data added!')
      }
      
    })


}

const remove = (id, callback) => {
   
    const queryString = `DELETE FROM URL_images.images WHERE id=${id}`
  
    client.execute(queryString, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(err,result);
        console.log('data deleted!')
      }
      
    })


}


module.exports= {getImages, addImg, remove};
