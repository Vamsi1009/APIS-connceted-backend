import mongoose from "mongoose";

const detailuser = new mongoose.Schema({
    NAME:{
        type:String,
        require:true
    },
    EmailId:{
        type:String
    },
    Language:{
        type:String
    },
    Interest:{
        type:String
    }
})
const item= mongoose.model('user' ,detailuser);
export{item};