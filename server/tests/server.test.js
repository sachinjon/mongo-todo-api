var request=require("supertest");
var expect=require("expect");

var {app}=require("./../server");
var {todomodel}=require("./../models/todo");


beforeEach((done)=>{
    todomodel.remove().then(()=>done());
})
describe("todo Post",()=>{
    it("to do list post api",(done)=>{
        var text="somthing todo text";
        request(app)
            .post("/todolist")
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text)
            })
            .end((err,res)=>{
                if(err)
                return done(err);
    
                console.log(res);
                todomodel.find().then((todolist)=>{
                    expect(todolist.length).toBe(1)
                    expect(todolist[0].text).toBe(text)
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
                expect(list.length).toBe(0);
                done();
            }).catch((e)=>done(e));
        })
    })


})
