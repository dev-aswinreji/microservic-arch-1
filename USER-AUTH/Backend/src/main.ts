import express from "express";

const app = express()

app.get('/login',(req,res)=>{
  res.send("This is login page")
})

app.listen(4000,()=>{
  console.log(`Server is running on http://localhost:4000`);
})

