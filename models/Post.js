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
    },
    likes:{
        type:Number,
        default:0

    },
    dislikes:{
        type:Number,
        default:0

    },
    interest:{
        type:[String]
    }
},{timestamps:true})

const item1 = mongoose.model('post',detailpost)
export{item1};