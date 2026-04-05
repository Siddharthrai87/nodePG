// line 2-12 shows server creation and calling by express where as line 16-42 shows creation and calling by node
const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to About Page");
})
app.listen(8000,()=>{
    console.log("Server started");
})



// const http=require("http");
// const fs=require("fs");
// const url=require("url");
// function myHandler(req,res){
//     if(req.url==="/favicon.ico")return res.end();
//     const timestamp=Date.now();
//     const date=new Date(timestamp);
//     const log=`${date.toString()} ${req.method}New req received at ${req.url} \n`;
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile('log.txt',log,(err,result)=>{
//         switch(myUrl.pathname){
//             case "/":res.end("Homepage");
//                     break;
//             case "/about":
//                     const userName=myUrl.query.name;
//                     res.end(`Hi ${userName}`);
//                     break;
//             default:res.end("404 Not Found");
//                     break;
//         }
//     })
// }
// const myServer=http.createServer(myHandler);
// myServer.listen(8000,()=>{
//     console.log("Server started");
// })