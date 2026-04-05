const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    const timestamp=Date.now();
    const date=new Date(timestamp);
    const log=`${date.toString()} New req received at ${req.url} \n`;
    fs.appendFile('log.txt',log,(err,result)=>{
        res.end("Hello from server");
    })
})

myServer.listen(8000,()=>{
    console.log("Server started");
})