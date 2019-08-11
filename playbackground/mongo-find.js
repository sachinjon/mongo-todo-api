var {MongoClient,ObjectID}=require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err)
        return console.log("database connection error");
    var db=client.db();
    /* db.collection("todos").find().toArray().then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
    }) */

    /* db.collection("todos").find({_id:ObjectID("5d4efa4b1bb35d26e025e136")}).toArray().then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
    }) */

    db.collection("todos").find().count().then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(err);
    })
})