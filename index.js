import Express from "express";
import bodyParser from "body-parser";
const app=Express();
const port=3000;

const currentDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
const dates = currentDate.getDate()+" "+months[(currentDate.getMonth() + 1)]+", " 
+currentDate.getFullYear();

app.use(Express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var c=[];
app.get("/",(req,res)=>{

   
    
    res.render("index.ejs",{htmlContant: c,date: dates });
})
var a=1;
app.post("/check",(req,res)=>{
    
    c.push(req.body["task"]);
   
       
       const data= { htmlContant : c,date: dates,count: a };
       

    res.render("index.ejs",data);
})

app.get("/delete",(req,res)=>{
    const currentDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    const dates = currentDate.getDate()+" "+months[(currentDate.getMonth() + 1)]+", " 
+currentDate.getFullYear();
    
   
        c.splice(a-1, 1);
        console.log(c);
       const data= { htmlContant : c,date: dates, count: a};
       

    res.render("index.ejs",data);
})
app.listen(port,()=>{
    console.log("done");
})

