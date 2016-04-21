var express = require('express');
var app = express();

app.use(express.static(__dirname+"/public"));

var contacts = [
    {name: "Luis Henrique", date: new Date(), phone:"(61) 9409-0599", operators : {name : "Oi", code: 14, category: "Cell"}},
    {name: "Silvio Santos", date: new Date(), phone:"(62) 4609-0599", operators : {name:"Tim", code: 41, category:"Cell"}},
    {name: "Goms Camilo", date: new Date(), phone:"(61) 4409-0599", operators : {name:"Claro", code: 15, category:"Cell"}},
    {name: "Ana", date: new Date(), phone:"(62) 42342-0599", operators : {name:"Brasil Telecon", code: 21, category:"Cell"}}
];

var  operators = [
  {name:"Oi",code:14,category:"Cell"},
  {name:"Tim",code:15,category:"Cell"},
  {name:"Vivo",code:16,category:"Cell"},
  {name:"Claro",code:17,category:"Cell"},
  {name:"GVT",code:19,category:"Fixo"},
  {name:"NET",code:20,category:"Fixo"},
  {name:"Embratel",code:21,category:"Fixo"}
];

app.listen(process.env.PORT || 3412);

app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/contacts",function(req, res){
    res.json(contacts);
});


app.get("/operators",function(req,res){
  res.json(operators);
});

app.post("/addContact",function(req,res,next){
    console.log(req.body);
});
