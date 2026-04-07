const express=require("express");
const users=require("./MOCK_DATA.json")
const fs=require("fs")

const app=express();
const PORT=8000;

// middleware / plugins
app.use(express.urlencoded({extended:false}));

// routes
// app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })


// REST API

app.get("/api/users",(req,res)=>{
    res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.send(user);
})

app.post("/api/users",(req,res)=>{
    // TODO : Creating a new user
    const body =req.body;
    console.log("Body",body);
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        res.send({status:"success ",id:users.length})
    })
})

app.patch("/api/users/:id",(req,res)=>{
    // TODO : Editing a user by id
    res.send({status:"pending"})
})

app.delete("/api/users/:id",(req,res)=>{
    // TODO : Delete a user by id
    res.send({status:"pending"})
})

/* app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.send(user);
    })
.patch((req,res)=>{
    // TODO : put a user by id
    return res.send({status:"pending"})
    })
.delete((req,res)=>{
    // TODO : Delete a user by id
    return res.send({status:"pending"})
    })
*/


app.listen(PORT,()=>console.log(`Server is running on PORT:${PORT}`));