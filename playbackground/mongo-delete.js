var {MongoClient,ObjectID}=require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err)
    return console.log(err);

    var db=client.db();

    /* db.collection("todos").deleteMany().then((result)=>{
        console.log(result);
    }) */
    /* db.collection("todos").deleteOne({name:"sachin"}).then((result)=>{
        console.log(result);
    }) */
    db.collection("todos").findOneAndDelete({_id:new ObjectID("5d4fa32cf806482960e60c60")}).then((result)=>{
        console.log(result);
    })
})