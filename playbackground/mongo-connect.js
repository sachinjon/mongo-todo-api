var MongoClient=require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
     if(err)
     return console.log("not able to connect to database");
    /* db.collection("todos").insert({name:"sachin",age:29},(err,res)=>{
      if(err) 
      return console.log("err",err)  ;
      console.log(res)
    }) */
    var db=client.db("TodoApp");
    db.collection("todos").insert({name:"sachin",age:29},(err,res)=>{
        if(err)
        return console.log(err);
        console.log(res);
    })
    client.close();
})
