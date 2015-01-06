var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine ('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname+ '/public'));


app.get('/', function(req, res){
   //res.set('Content-Type', 'text/html').send('<b> hello world !!! </b>');
     res.render('home');  
   });
   
 app.get('/home', function(req, res){
   //res.set('Content-Type', 'text/html').send('<b> hello world !!! </b>');
     res.render('home');  
   });
   

   
 app.get('/about', function(req, res){
		 var randomFortune =
		fortunes[Math.floor(Math.random() * fortunes.length)];
		res.render('about', { fortune: randomFortune });
    // res.render('about');  
   });
     
	 
/*
app.use('/abcd', function(req,res,next){
res.set('Content-Type','text/html').send('<b> abcd </b>');
 //next();
}); 

/*
var server = app.listen(3000, function() {

});
*/
app.listen(app.get('port'), function(){
  console.log (' Express Started at' + app.get('port') );
});

 
// app.listen(3000);



