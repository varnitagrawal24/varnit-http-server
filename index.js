const express=require("express")
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path=require("path")

const app=express();

app.get('/',(req,res)=>{
  res.send("<h1>hello</h1>")
})

app.get('/html',(req,res)=>{
  res.sendFile(path.join(__dirname,"htmlFile.html"));
})

app.get('/json',(req,res)=>{
  res.sendFile(path.join(__dirname,"index.json"));
})

app.get('/uuid',(req,res)=>{
  const uuid=uuidv4()
  res.json({uuid:uuid})
})

app.listen(3000, () => {
  console.log("server is live on 3000....!!!");
});
