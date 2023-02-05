import mongoose from "mongoose";

const xxxSchema =mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,}
})

export const xxxmodel =mongoose.model('xyz',xxxSchema);