var express = require('express');
var app = express();
//app.set('views', __dirname + '/views');

app.engine('html',require('ejs').renderFile);

//app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname+ '/public'));

app.get('/',function(req,res){
		res.render('main.html');
});


app.get('/test', function(req,res){
      res.render('test.html');
 });
 
app.get('/test-customize',function(req,res){
	res.render('test-customize.html');
});
 
 

app.listen(app.get('port'), function(){
  console.log (' Express Started at' + app.get('port') );
});
