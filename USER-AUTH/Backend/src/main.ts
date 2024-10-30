import express from "express";

const app = express()

app.get('/',(req,res)=>{
  res.send("hello")
})

app.listen(4000,()=>{
  console.log(`Server is running on http://localhost:4000`);
})
