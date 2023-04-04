const express = require("express");

const app = new express();

app.get("/",(req,res)=>{
      res.send("Hello");
})

const PORT = 7000

app.listen(process.env.PORT || PORT,()=>{
      console.log("SERVER STARTED AT : ", PORT);
})