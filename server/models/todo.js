var mongoose=require("mongoose");

var todomodel = mongoose.model("todo",{
    text:{
        type:String,
        default:null,
        required:true
    }
})
module.exports={
    todomodel
}
