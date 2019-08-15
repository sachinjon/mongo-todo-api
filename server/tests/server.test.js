var request=require("supertest");
var expect=require("expect");
var {ObjectID}=require("mongodb");
var {app}=require("./../server");
var {todomodel}=require("./../models/todo");


var todos=[
            {   
                _id:new ObjectID(),
                text:"first to do"
            },
            {   
                _id:new ObjectID(),
                text:"second to do"
            }
          ];

/* before(async()=>{
    await Delayfun("lol",1000);
})  */
         
 beforeEach((done)=>{
    todomodel.remove().then(()=>{
        return todomodel.insertMany(todos);
    }).then(()=>done());
})


describe("todo Post",()=>{
    it("to do list post api",(done)=>{
        var text="somthing todo text";
        request(app)
            .post("/todolist")
            .send({text})
            .expect(200)
            /* .expect((res)=>{
                expect(res.body.text).toBe(text)
            }) */
            .end((err,res)=>{
                if(err)
                return done(err);
    
               //  console.log(res);
                todomodel.find().then((todolist)=>{
                    expect(todolist.length).toBe(3)
                   // expect(todolist[0].text).toBe(text)
                    done();
                }).catch((err)=>done(err))
                
            })
    })
})

describe("to do empty request",()=>{
    it("should not create to do list",(done)=>{
        request(app)
        .post("/todolist")
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err)
                return done(err);
                todomodel.find().then((list)=>{
                expect(list.length).toBe(2);
                done();
            }).catch((e)=>done(e));
        })
    })
})

describe("GET todolist",()=>{
    it("get all records of todo",(done)=>{
        request(app)
        .get("/todolist")
        .expect(200)
        /* .expect((err,list)=>{
            expect(list.length).toBe(2)
        }) */
        .end(done)
    })
})
describe("GET todolist parm query",()=>{
    it("get one records of todo",(done)=>{
        request(app)
        .get("/todolist/123")
        .expect(404)
        .end(done)
    })
})

describe("GET Query params",()=>{
    it("should return to do w.r.t Id",(done)=>{
        request(app)
        .get(`/todolist/${todos[0]._id.toHexString()}`)
        .expect(200)
        /* .expect((res)=>{
           expect(res.body.todo.text).toBe(todos[0].text)
        }) */ 
        .end(done)
    });
}) 

describe("get query wrong id",()=>{
    it("id not found",(done)=>{
        var ObID=new ObjectID().toHexString();
        request(app)
        .get(`/todolist/${ObID}`)
        .expect(404)
        .end(done)
    })
})