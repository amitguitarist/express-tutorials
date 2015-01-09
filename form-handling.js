var express = require('express');
var app = express();

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine ('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname+ '/public'));

app.get ('/search-result',function(req,res){
		  var name = req.query.name;
		  var source = req.query.source; 
		  var vehicle = req.query.vehicle;
		 // var num = vehicle.split(",");
		 // var number = num.length;
		  console.log('Searching for:' + name);
		  console.log('From:' + source);
		 // console.log('Vehicle:' + vehicle);
		 // console.log('num:' + number);
		 
		  res.render('search-result',{'title': 'Form Submission',
									  'name' : name,
									  'source' : source,
									  }  
				);	
		   
		   //res.json(req.query); 	
				
});

app.listen(app.get('port'), function(){
  console.log (' Express Started at' + app.get('port') );
});


