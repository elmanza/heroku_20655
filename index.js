let express = require("express");
let app = express();
const PORT = 8080;

app.get("/", (req,res)=>{res.send("Todo ok!")});


app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)});