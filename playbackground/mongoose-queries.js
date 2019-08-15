var { mongoose }=require("../server/db/mongoose");
var { todomodel }=require("../server/models/todo");

var id="5d5195f7ed1e8708c04655b7";

todomodel.find({_id:id}).then((todos)=>{
    console.log(todos);
})

todomodel.findOne({_id:id}).then((todos)=>{
    console.log(todos);
})

todomodel.findById(id).then((todos)=>{
    console.log(todos);
})