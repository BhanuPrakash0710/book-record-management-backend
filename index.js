const express = require("express");

const app = express();
const port = 8081;

app.use(express.json);

app.get("/" , (req,res) =>{
    res.status(200).json({
        message : "Running succesfully"
    });
});

app.listen(port, ()=>{
    console.log(`Server started running at ${port}`);
});