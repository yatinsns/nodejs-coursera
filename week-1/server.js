var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./dishRouter');

console.log(JSON.stringify(dishRouter));

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function (){
  console.log('Server running...');
});
