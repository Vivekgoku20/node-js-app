// console.log("dvsDF");
// setTimeout( function()
// {
// 	console.log("Its time!");
// }
// // ,3000);
// let time=0;
// var timer=setInterval(
// 	function()
// 	{
// 		time+=2;
// 		console.log(time+" seconds have passed");
// 		if(time>5)
// 		{
// 			clearInterval(timer);
// 		}
// // 	},2000)
// console.log(__dirname);

// // console.log(__filename);
// function callf(fun)
// {
// 	fun();
// }
// function acc()
// {
// 	console.log("asfdas");

// }
// callf(acc);
// var stuff=require('./req');
// console.log(stuff.imp(['sd','sdf','dfw']));
// console.log(stuff.adder(23,4));
// var events=require('events');
// var myEmitter=new events.EventEmitter();
// myEmitter.on('someEvent',function(msg)
// {
// 	console.log(msg);
// });
// myEmitter.emit('someEvent','This event is emitted');
// var events=require('events');

// var util=require('util');
// var Person=function(name)
// {
// 	this.name=name;
// };
// util.inherits(Person,events.EventEmitter);
// var James=new Person('James');
// var Marry=new Person('Marry');
// var Ross=new Person('Ross');
// var people=[James,Marry,Ross];
// people.forEach(function(person)
// {
// 	person.on('speak',function(mssg)
// 	{
// 		console.log(person.name+' said : '+mssg);
// 	});
// });
// James.emit('speak','hey dudes');
// Ross.emit('speak','Rachel!');
// var fs=require('fs');
// var readme=fs.readFileSync('read.txt','utf8');
// fs.writeFileSync('write.txt',readme);
// fs.unlink('write.txt',function()
// 	{

// 	});
// readStream.on('data',function(chunk){
// 	console.log('new chunk recieved: ');
// 	console.log(chunk);
// 	writeStream.write(chunk);
// })
// console.log(readme);
// var http=require('http');
// var fs=require('fs');



// var server=http.createServer(function(req,res){
// print()	
// 	console.log(req.url);
// 	if(req.url === '/hoe')
// 	{	
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		fs.createReadStream(__dirname+'/index.html').pipe(res);

// 		// readStream.pipe(res);
	
// 	}
// 	else{
// 		console.log("fail!");
// 		res.end("problem");
// 	}
// 	// res.end('Hey Ninjas');
// 	});
// server.listen(3000,'127.0.0.1');

var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var app1 = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',function(req,res)
{
	res.sendFile(__dirname+'/index.html');
	// res.send("dsfdsf");
});
app.get('/contact',function(req,res)
{
	// console.log(req.query);
	res.send('This is the contact');
});
app.get('/profile',function(req,res){
	// res.send('You requestd to see the profile with the id '+req.params.id);
	var data=['ads','asdfaf','asfwefew'];
	res.render('profile.ejs',{person: {name:"asfsaf",dept:"dff"}});

});
app.post('/profile',urlencodedParser,function(req,res)
{
	console.log(req.body);
	res.render('succ.ejs',{data:req.body});
});
app.listen(3000);