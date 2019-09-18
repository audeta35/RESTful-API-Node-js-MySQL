//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');

const app = express();

//set views file
app.set('views',path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:false}));

//set public folder as static folder for static file
app.use(express.static('public'));

//route untuk halaman utama
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : "Audeta Sandy"
  });
});

//route form.hbs
app.get('/post', (req, res) => {
  res.render('form');
});

//route post form.hbs
app.post('/post', (req, res) => {
  res.render('index', {

    name : req.body.username
  });
});

//route untuk halaman home dengan parameter name
app.get('/:nama',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : req.params.nama
  });
});

app.listen(8000, () => {
  console.log('Server is running at port http://localhost:8000');
});
