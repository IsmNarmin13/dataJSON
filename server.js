const express = require('express');
const app = express();
const fs = require('fs');

// app.get('/', function (req, res) {
//     res.send(fs.readFile('./data.json', 'utf8', (err, data) => {
//         if (!err) {
//             console.log(data);
//         } else {
//             console.error(err);
//         }
//     }));
// });


app.get('/', function (req, res) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (!err) {
           
                res.send(data);
             
        } else {
          console.error(err);
        }
      });
  });



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});