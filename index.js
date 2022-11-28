const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse")
const port = process.env.PORT || 3000
var cors = require('cors');

const app = express();
app.use(cors());
app.use(fileUpload());
app.post("/pdf", (req, res)=>{
    if (!req.files && !req.files.pdfFile) {
        res.status(400)
        res.send
    }
    pdfParse(req.files.pdf).then(result =>{
        
        res.send(result.text)
    })
})
  

app.listen(port, ()=>{console.log(port)})