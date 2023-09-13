const express=require("express")
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path=require("path")

const app=express();


app.get('/',(req,res)=>{

try {
  res.status(200).send("<h1>hello</h1>")
  
} catch (error) {
  res.status(404).send('Not Found')
}
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

app.get('/status/:status_code',(req,res)=>{
  const statusCode=Number(req.params.status_code);
  res.status(statusCode).send(`status code: ${statusCode}`);
})

app.listen(3000, () => {
  console.log("server is live on 3000....!!!");
});
