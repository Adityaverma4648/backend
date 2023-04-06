const express = require("express");
const apiRoutes =  require("./routes/apiRoutes");

const app = new express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

app.use("/api",apiRoutes);

const PORT = 7000

app.listen(process.env.PORT || PORT,()=>{
      console.log("SERVER STARTED AT : ", PORT);
})