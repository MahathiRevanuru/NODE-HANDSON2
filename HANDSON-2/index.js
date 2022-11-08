const express = require('express');
const app = express();

app.get('/main',(req,res)=>{
    res.send("<h1>Hello from main</h1>")
})
app.get('/api',(req,res)=>{
    res.send("<h1>hello from api</h1>")
})


app.listen(5000,()=>console.log("server running"))