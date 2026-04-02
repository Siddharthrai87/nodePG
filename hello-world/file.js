const { error } = require("console");
const fs=require("fs");
const os=require("os");

// fs.writeFileSync('./text.txt',"hey there");

// const result=fs.readFileSync("./text.txt","utf-8");
// console.log(result);

// fs.readFile("./text.txt","utf-8",(error,result)=>{
//     if(error)console.log(error);
//     else console.log(result);
// })


// fs.writeFile("test.txt","hello",(err)=>{
//     if(err)console.log(err);
// })

// fs.unlinkSync("./test.txt");

// console.log(fs.statSync("./text.txt"));
// fs.mkdirSync("hell/a/b",{recursive:true});

console.log(os.cpus().length);