var express = require('express');

var app = express();

app.get('/', (req,res) => res.send('Hello Mamasita'));

app.listen(8081, () => console.log('App listening on port: 8081'))