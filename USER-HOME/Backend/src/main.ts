import express from "express";

const app = express()

app.get('/home',(req,res)=>{
  res.send("This is home page")
})

app.listen(4001,()=>{
  console.log(`Server is running on http://localhost:4001`);
})

