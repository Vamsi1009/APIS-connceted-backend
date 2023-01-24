import mongoose from "mongoose";

const detailpost = new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    content:{
        type:String
    },
    InterestTag:{
        type:String
    }
})

const item1 = mongoose.model('post',detailpost)
export{item1};