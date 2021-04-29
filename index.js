//express
var express = require('express');

//parser
var bodyParser = require('body-parser');

//fetch
//var fetch = require('node-fetch');

//call express
var app = express();

//port information
const port = process.env.PORT || 3000;

//use EJS for templates 
app.set('view engine','ejs');


//make styles public
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.render('index');
});

app.listen(port,function(){
    console.log('Using port: '+ port);
});
