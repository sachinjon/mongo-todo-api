var mongoose=require("mongoose");
var usermodel = mongoose.model("user",{
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    age:{
        type:Number
    },
    createdAt:{
        type:Number
    }
});

module.exports={
    usermodel
};