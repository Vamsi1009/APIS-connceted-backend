import express from "express";
import {routes} from "./routers/route.js";
import {mongoose} from "mongoose";
import cors from "cors";


const app = express();

app.use(express.json());
const databaseUrl = 'mongodb+srv://node:node123@cluster0.xl4ufri.mongodb.net/detail'
mongoose.connect(databaseUrl);
const database = mongoose.connection;

database.on('error',(error)=>{
    console.log("error is occuring",error);
})

database.once('connected',()=>{
    console.log("database connected succesfully");
})

app.use(routes);

app.get('/node',(req,res)=>{
    res.status(200).send("server is running is succefully");

})
app.listen(5000,()=>{
    console.log("server is running sucessfully");
})