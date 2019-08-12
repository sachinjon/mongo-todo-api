var express=require("express");
var bodyParser=require("body-parser");

var {mongoose} = require("./db/mongoose");
var {usermodel} =require("./models/user");
var {todomodel} =require("./models/todo");

var app=express();
app.use(bodyParser.json());

app.post("/userlist",(req,res)=>{
    console.log(req.body);
    var newuser=new usermodel({name:req.body.name,age:req.body.age})
    newuser.save().then((docs)=>{
        res.send(docs);
    },(err)=>{
        res.send(err);
    })
})
app.post("/todolist",(req,res)=>{
    console.log(req.body);
    var newtodo=new todomodel({text:req.body.text})
    newtodo.save().then((docs)=>{
        res.send(docs);
    },(err)=>{
        res.send(err);
    })
})

app.listen(3000,()=>{
    console.log("application listening 3000");
})