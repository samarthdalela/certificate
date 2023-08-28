import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{
    res.render(__dirname+"/index.ejs")
})


app.post("/submit",(req,res)=>{
     data:req.body
     var date=new Date();
var day=date.getDate();
var month=date.getMonth()+1;
var year=date.getFullYear(); 
 

    res.render(__dirname+"/views/certificate.ejs",{data:req.body,date:day+"/"+month+"/"+year})
    
})

app.get("/index.ejs", (req, res)=>{ 
    res.render(__dirname + "/index.ejs")
})






app.listen(port,()=>{
    console.log("you are listening to the port"+port)
})


