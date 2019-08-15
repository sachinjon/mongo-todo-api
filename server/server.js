var express=require("express");
var bodyParser=require("body-parser");

var {mongoose} = require("./db/mongoose");
var {usermodel} =require("./models/user");
var {todomodel} =require("./models/todo");

var {ObjectId}=require("mongodb");
var port = process.env.PORT || 3000;

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
        res.status(200).send(docs);
    },(err)=>{
        res.status(400).send(err);
    })
})

app.get("/todolist",(req,res)=>{
    todomodel.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(200).send(err);       
    })
})

app.get("/todolist/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(404).send();
    }
    todomodel.findById(req.params.id).then((list)=>{
        res.send({list})
    })
})

app.listen(port,()=>{
    console.log(`application listening ${port}`);
})

module.exports={app};