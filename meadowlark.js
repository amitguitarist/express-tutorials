var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine ('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortune = require('./lib/fortune.js');
/*
var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

*/
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname+ '/public'));

app.use(function (req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test == '1';
	 if(!res.locals.partials) res.locals.partials = {};
		res.locals.partials.weather = getWeatherData();
  next();

});

/*
  app.use(function(req, res, next){
	if(!res.locals.partials) res.locals.partials = {};
	res.locals.partials.weather = getWeatherData();
	next();
  });
*/
  

app.get('/', function(req, res){
   //res.set('Content-Type', 'text/html').send('<b> hello world !!! </b>');
     res.render('home');  
   });
   
 app.get('/home', function(req, res){
   //res.set('Content-Type', 'text/html').send('<b> hello world !!! </b>');
     res.render('home');  
   });
   

   
 app.get('/about', function(req, res){
		// var randomFortune =
		//fortunes[Math.floor(Math.random() * fortunes.length)];
		//res.render('about', { fortune: randomFortune });
		res.render('about', { fortune : fortune.getFortune(), pageTestScript: '/qa/tests-about.js'});
    // res.render('about');  
	
   });
     
	 app.get('/headers', function(req,res){
res.set('Content-Type','text/plain');
var s = '';
for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
res.send(s);
});

  app.get('/greeting', function(req, res) {
   res.render('about', {
    message: 'welcome',
	style: req.query.style,
	userid: req.cookie.userid,
	username: req.session.username,
	});
    
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



function getWeatherData(){
	return {
		locations: [
			{
				name: 'Portland',
				forecastUrl: 'http://www.wunderground.com/US',
				iconUrl: 'http://www.underground.com/Us',
				weather: 'portland Overcast',
				temp: '54.1F',
			},
			{
				name: 'Bend',
				forecastUrl: 'http://www.wunderground.com/US',
				iconUrl: 'http://www.underground.com/Us',
				weather: 'Bend Overcast',
				temp: '54.1F',
			},
		  ],
		};			
	}
	


app.listen(app.get('port'), function(){
  console.log (' Express Started at' + app.get('port') );
});

 
// app.listen(3000);



