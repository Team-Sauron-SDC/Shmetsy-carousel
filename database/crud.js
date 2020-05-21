const connection = require('./index');

const crud = {
    
  read: (id, callback) => {
    var queryString = `SELECT * FROM colors where product_id = ${id}`;
    connection.query(queryString, (err, data) => {
      if (err) {
          console.log(err);
      } else {
          callback(null, data);
      }
    })
    
  },

  create: (table,obj,callback) => {
    var col = Object.keys(obj);
    var val = Object.values(obj);
    var columns = '';
    for (var i = 0; i< col.length ; i++) {
        if (i === col.length-1) {
            columns += `${col[i]}`
        } else {
        columns += `${col[i]}, `
        }
    }
      var values = '';
      for (var i = 0; i< val.length ; i++) {
          if (i === val.length-1) {
             values += `'${val[i]}'`
           } else {
              values += `'${val[i]}', `
           }
      }    
        var queryString = `INSERT INTO ${table} (${columns}) VALUES (${values})`;
        
        connection.query(queryString, (err, data) => {
          if (err) {
              console.log(err);
          } else {
              callback(null, data);
          }
        })
    },

   delete: (table, obj, callback) => {
     var col = Object.keys(obj).toString();
     var value = `'${obj[col]}'`;
     var queryString =`DELETE FROM ${table} WHERE ${col}=${value}`;
     connection.query(queryString, (err, data) => {
         if (err) {
             console.log(err);
         } else {
             callback(null, data);
         }
     })
   },

   update: (table, obj, id, callback) => {
    var cols = Object.keys(obj).toString();
    var val1 = `'${obj[cols][0]}'`;
    var val2 = `'${obj[cols][1]}'`;
    var queryString =`UPDATE ${table} SET ${cols}=${val2} WHERE ${cols}=${val1}`;
    console.log(queryString)
    connection.query(queryString, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, data);
        }
    })
},
}


module.exports = crud;
