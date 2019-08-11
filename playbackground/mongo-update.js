var {MongoClient,ObjectID}=require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err)
    return console.log(err)
    var db=client.db();
    db.collection("todos").update(
        {_id:new ObjectID("5d4fa328dcc71d1628411072")},
        {$set:{name:"Akshay"},$inc:{age:1}},
        {returnOriginal:false}
    ).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
    })
})
